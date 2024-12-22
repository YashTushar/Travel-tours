import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database connection
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("MongoDB database connection failed:", err.message);
  }
};

console.log("MongoDB database connected"); // Log only on successful connection

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", authRoute);
app.use("/tours", tourRoute);
app.use("/users", userRoute);

// Start the server after connecting to the database
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
