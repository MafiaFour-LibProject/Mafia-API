const router = require("express").Router();
const AnalyticsController = require("../controllers/analytics.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.use(protect);
router.get("/overview", restrictTo("superadmin"), AnalyticsController.getOverview);
router.get("/facilities", restrictTo("superadmin"), AnalyticsController.getFacilityStats);

module.exports = router;