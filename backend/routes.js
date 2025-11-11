import express from "express";
const router = express.Router();
import Note from "./Model.js";

router.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});


// codingnew50_db_user
// 2rS1RGy1J8N9sFoO

router.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});

router.put("/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const updated = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true }  
    // The { new: true } option returns the updated document instead of the original one
  );
  res.json(updated);
});

router.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  return;
});

export default router;
