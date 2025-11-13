import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import  todoRoutes  from "./routes/todo.routes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/", todoRoutes);

export default app;
