import "./App.css";

export default function NoteList({ setEditNote, notes, deleteNote }) {
  const edit = (note) => {
    setEditNote(note);
  };
  const style = { backgroundColor: "transparent" };
  return (
    <div className="note-list">
      <h1>Note's List</h1>
      {notes.map((note) => (
        <div className="note-list-items" key={note._id}>
          <div>
            <h2 style={style}>{note.title}</h2>
            <p style={style}>{note.content}</p>
          </div>
          <div>
            <button
              style={{ margin: "10px", background: "blue" }}
              onClick={() => edit(note)}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "transparent",
                }}
                src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                alt="edit"
              />
            </button>
            <button
              style={{ margin: "10px", background: "red" }}
              onClick={() => deleteNote(note._id)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="delete"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "transparent",
                }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
