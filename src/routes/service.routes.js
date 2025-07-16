const router = require("express").Router();
const ServiceController = require("../controllers/service.controller");
const { auth, authorize } = require("../middlewares/authMiddleware");
const { validateService, validateStockUpdate } = require("../middlewares/validation");

// Public
router.get("/search", ServiceController.searchServices);
router.get("/facility/:facilityId", ServiceController.getAfacilityServices);

// Authenticated + Admin
router.use(auth);

router.post("/", authorize("admin", "superadmin"), validateService, ServiceController.createService);
router.put("/:id", authorize("admin", "superadmin"), validateService, ServiceController.updateService);
router.delete("/:id", authorize("admin", "superadmin"), ServiceController.deleteService);
router.put("/:id/stock", authorize("admin", "superadmin"), validateStockUpdate, ServiceController.updateStock);
router.get("/low-stock", authorize("admin", "superadmin"), ServiceController.getLowStock);

module.exports = router;