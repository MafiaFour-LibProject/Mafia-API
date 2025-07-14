/*
const router = require("express").Router();
const AppointmentController = require("../controllers/appointment.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect);
router.get("/", AppointmentController.getAll);
router.get("/facility/:id", AppointmentController.getByFacility);
router.post("/", AppointmentController.create);
router.put("/:id", AppointmentController.update);
router.delete("/:id", AppointmentController.remove);

module.exports = router;
*/

const router = require("express").Router();
const AppointmentController = require("../controllers/appointment.controller");
const { auth } = require("../middlewares/auth.middleware");
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