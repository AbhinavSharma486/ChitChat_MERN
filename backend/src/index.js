import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", authRoutes, messageRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port : " + PORT);
  connectDB();
});