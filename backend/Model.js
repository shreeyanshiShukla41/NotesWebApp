import mongoose from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: String,
  content: String,
});


const Note=mongoose.model("Note",NotesSchema);


export default Note;
