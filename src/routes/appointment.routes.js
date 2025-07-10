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