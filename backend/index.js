import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = process.env.PORT || 8001;
import router from "./routes.js";
import dotenv from "dotenv";
dotenv.config();

main()
  .then((r) => console.log("Database Connected"))
  .catch((e) => console.log("Error Message:", e));

async function main() {
  await mongoose.connect(process.env.ATLAS_URI);
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
