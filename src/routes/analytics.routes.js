const express = require("express");
const router = express.Router();

const AnalyticsController = require("../controllers/analytics.controller");
const { auth, authorize } = require("../middlewares/authMiddleware");

// Apply authentication to all analytics routes
router.use(auth);

router.get("/overview", authorize("superadmin"), AnalyticsController.getPlatformAnalytics);
router.get("/facilities", authorize("superadmin"), AnalyticsController.getFacilityAnalytics);

module.exports = router;