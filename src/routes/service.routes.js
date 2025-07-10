const router = require("express").Router();
const ServiceController = require("../controllers/service.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.get("/", ServiceController.getAll);
router.get("/search", ServiceController.search);

router.use(protect);
router.post("/", restrictTo("facilityAdmin"), ServiceController.create);
router.put("/:id", restrictTo("facilityAdmin"), ServiceController.update);
router.delete("/:id", restrictTo("facilityAdmin"), ServiceController.remove);

module.exports = router;