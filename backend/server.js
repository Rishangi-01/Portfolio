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

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-cyan-xi-14.vercel.app",
  "https://portfolio-cyan-xi-14.vercel.app/"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      // (Postman, server-to-server, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
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