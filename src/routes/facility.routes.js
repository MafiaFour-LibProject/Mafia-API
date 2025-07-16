const router = require("express").Router();
const FacilityController = require("../controllers/facility.controller");
const { auth, authorize } = require("../middlewares/authMiddleware");
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