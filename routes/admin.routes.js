const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin.controller");
const { auth, authorize } = require("../middlewares/authMiddleware");

// Apply authentication and role-based authorization
router.use(auth);                         // Ensure the user is logged in
router.use(authorize("superadmin"));      // Only allow superadmins

// Admin routes
router.get("/users", AdminController.getAllUsers);
router.put("/users/:id/role", AdminController.updateUserRole);
router.delete("/users/:id", AdminController.removeUser);
router.post("/invite-facility-admin", AdminController.inviteFacilityAdmin);

module.exports = router;