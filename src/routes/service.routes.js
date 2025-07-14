/*
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
*/

const router = require("express").Router();
const ServiceController = require("../controllers/service.controller");
const { auth, authorize } = require("../middlewares/auth.middleware");
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