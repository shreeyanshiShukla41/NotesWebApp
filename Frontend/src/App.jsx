import { useEffect, useState } from "react";
import "./App.css";
import Noteform from "./Noteform";
import NoteList from "./NoteList";
import NewApp from "./NewApp";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  // fetches notes from the backend
  useEffect(() => {
    fetch("http://localhost:8001/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // sends a new note to the backend
  const addNote = async (note) => {
    const res = await fetch("http://localhost:8001/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    setNotes([...notes, data]);
  };

  const updateNote = async (id, updatedNote) => {
    const res = await fetch(`http://localhost:8001/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    });

    const data = await res.json();
    setNotes(notes.map((note) => (note._id === id ? data : note)));
    setEditNote(null);
  };

  const deleteNote = async (id) => {
    const res = await fetch(`http://localhost:8001/api/notes/${id}`, {
      method: "DELETE",
    });
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div>
      <h1 className="main-heading">Notes App</h1>
      <div className="wrapper" style={{display:"flex" ,width:"80%", margin:"auto", gap:"50px",}}>
        <Noteform
          addNote={addNote}
          editNote={editNote}
          updateNote={updateNote}
        />

        <NoteList
          setEditNote={setEditNote}
          notes={notes}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
