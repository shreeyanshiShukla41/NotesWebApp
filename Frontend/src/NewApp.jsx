import { useState } from "react";

export default function NewApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const style = { display: "flex", flexDirection: "column", gap: "10px" };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const newNote = { id: Date.now(), title, content };
    setNotes([...notes, newNote]);
    console.log(notes);

    setContent("");
    setTitle("");
  };

  return (
    <>
      <h2>Add new notes</h2>
      <form onSubmit={handleSubmit} style={style}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note....."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
        />

        <button type="submit">Add Note</button>
      </form>
      {/* Notes List */}
      <div>
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          <div>
            {notes.map((note) => (
              <div key={note.id}>
                <h3>{note.title}</h3>
                <span>{note.content}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
