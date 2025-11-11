import React, { useState, useEffect } from "react";
import "./App.css";

export default function Noteform({ editNote, addNote, updateNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "" });

  // UseEffect
  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    }
  }, [editNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editNote) {
      updateNote(editNote._id, { title, content });
    } else {
      addNote({ title, content });
    }
    setTitle("");
    setContent("");
  };

  return (
    <div className="note-form" style={{ width: "50%" }}>
      <form onSubmit={handleSubmit}>
        <h2 className="note-heading">Note Form</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ margin: "20px" }}
            required
          />

          <textarea
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ margin: "20px" }}
            required
          />
          <button type="submit">{editNote ? "Update" : "Add"} Note</button>
        </div>
      </form>
    </div>
  );
}
