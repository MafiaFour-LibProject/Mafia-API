const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.use(protect);
router.use(restrictTo("superadmin"));

router.get("/users", AdminController.getAllUsers);
router.put("/users/:id/role", AdminController.updateUserRole);
router.delete("/users/:id", AdminController.removeUser);
router.post("/invite-facility-admin", AdminController.inviteFacilityAdmin);

module.exports = router;