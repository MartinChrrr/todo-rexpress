import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";

export async function connectDB() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("✅ Mongoose connecté !");
  } catch (error) {
    console.error("❌ Erreur de connexion Mongoose :", error);
    process.exit(1);
  }
}
