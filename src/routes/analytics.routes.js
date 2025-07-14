/*
const router = require("express").Router();
const AnalyticsController = require("../controllers/analytics.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.use(protect);
router.get("/overview", restrictTo("superadmin"), AnalyticsController.getOverview);
router.get("/facilities", restrictTo("superadmin"), AnalyticsController.getFacilityStats);

module.exports = router;
*/


const express = require("express");
const router = express.Router();

const AnalyticsController = require("../controllers/analytics.controller");
const { auth, authorize } = require("../middlewares/auth.middleware");

// Apply authentication to all analytics routes
router.use(auth);

// Route: Get system-wide overview (only accessible to superadmin)
router.get("/overview", authorize("superadmin"), AnalyticsController.getOverview);

// Route: Get statistics related to facilities (only accessible to superadmin)
router.get("/facilities", authorize("superadmin"), AnalyticsController.getFacilityStats);

module.exports = router;
