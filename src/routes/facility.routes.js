/*
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
*/

const router = require("express").Router();
const FacilityController = require("../controllers/facility.controller");
const { auth, authorize } = require("../middlewares/auth.middleware");
const { validateFacility } = require("../middlewares/validation");

router.get("/", FacilityController.getAllFacilities);
router.get("/search", FacilityController.searchFacilities);
router.get("/nearby", FacilityController.getNearbyFacilities);
router.get("/:id", FacilityController.getFacilityById);
router.get("/:id/available-slots", FacilityController.getAvailableTimeSlots);

// Authenticated routes
router.use(auth);

// Admin-only facility actions
router.post("/", authorize("admin", "superadmin"), validateFacility, FacilityController.addFacility);
router.put("/:id", authorize("admin", "superadmin"), validateFacility, FacilityController.updateFacility);
router.put("/:id/deactivate", authorize("admin", "superadmin"), FacilityController.deactivateFacility);
router.post("/:id/upload-photos", authorize("admin", "superadmin"), FacilityController.uploadFacilityPhotos);
router.get("/dashboard/me", authorize("admin"), FacilityController.getFacilityDashboard);

module.exports = router;