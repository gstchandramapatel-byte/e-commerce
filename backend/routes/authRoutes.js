// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  signup,
  signupAdmin,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/authController");

// Auth routes
router.post("/signup", signup);
router.post("/signup-admin", signupAdmin); // New admin signup route
router.post("/login", login);

// User routes
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
