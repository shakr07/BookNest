import express, { request } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from './routes/booksRoutes.js';
import cors from "cors";
dotenv.config();
const app = express();
// Middleware for parsing JSON bodies

app.use(express.json());
app.use(cors());
const PORT = "8000";
const url = process.env.mongo_URL;

app.get("/", (req, res) => {
  return res.status(234).send("yes my nigga");
});


//middleware for every routes
app.use('/books',booksRoute);

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

connectToMongoDB();

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT: ${PORT}`);
});
