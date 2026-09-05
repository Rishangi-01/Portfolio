const express = require("express");

const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
} = require("../controllers/adminController");

const { protectAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Auth
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// Protected
router.get("/profile", protectAdmin, getAdminProfile);

module.exports = router;