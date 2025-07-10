const router = require("express").Router();
const FacilityController = require("../controllers/facility.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.get("/", FacilityController.getAll);
router.get("/search", FacilityController.search);
router.get("/:id", FacilityController.getOne);

router.use(protect);
router.post("/", restrictTo("superadmin"), FacilityController.create);
router.put("/:id", restrictTo("facilityAdmin"), FacilityController.update);
router.delete("/:id", restrictTo("superadmin"), FacilityController.remove);

module.exports = router;