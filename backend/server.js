const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./config/db");

const app = express();

// Connect MongoDB
connectDB();


// =================================
// Middleware
// =================================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// =================================
// Routes
// =================================

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

// =================================
// Test API
// =================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
  });
});

// =================================
// Server
// =================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});