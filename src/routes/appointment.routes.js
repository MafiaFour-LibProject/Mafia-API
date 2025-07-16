const router = require("express").Router();
const AppointmentController = require("../controllers/appointment.controller");
const { auth } = require("../middlewares/authMiddleware");
const { validateAppointment } = require("../middlewares/validation");

// Authenticated user routes
router.use(auth);

router.post("/", validateAppointment, AppointmentController.bookAppointment);
router.get("/", AppointmentController.getUserAppointments);
router.get("/facility/:facilityId", AppointmentController.getFacilityAppointments);
router.get("/:id", AppointmentController.getAppointmentById);
router.put("/:id/status", AppointmentController.updateAppointmentStatus);
router.delete("/:id", AppointmentController.cancelAppointment);

module.exports = router;