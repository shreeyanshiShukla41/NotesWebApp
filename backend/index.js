import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 8001;
import router from "./routes.js";

main()
  .then((r) => console.log("Database Connected"))
  .catch((e) => console.log("Error Message:", e));

async function main() {
  await mongoose.connect(
    "mongodb+srv://codingnew50_db_user:2rS1RGy1J8N9sFoO@cluster0.3gftodl.mongodb.net/"
  );
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", router);

app.listen(PORT, () => {
  console.log("http://localhost:8001/");
});
