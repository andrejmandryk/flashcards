require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON body content

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected!");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

connectDB();

app.use("/api/users", usersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
