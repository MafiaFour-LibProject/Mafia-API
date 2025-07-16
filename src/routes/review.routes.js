const router = require("express").Router();
const ReviewController = require("../controllers/review.controller");
const { auth } = require("../middlewares/authMiddleware");
const { validateReview } = require("../middlewares/validation");

router.get("/:facilityId", ReviewController.getFacilityReviews);

// Authenticated user can create and delete own review
router.use(auth);

router.post("/", validateReview, ReviewController.createReviews);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;