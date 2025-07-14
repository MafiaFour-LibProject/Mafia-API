/*
const router = require("express").Router();
const ReviewController = require("../controllers/review.controller");
const { protect } = require("../middleware/auth.middleware");

router.get("/", ReviewController.getAll);
router.get("/facility/:id", ReviewController.getByFacility);

router.use(protect);
router.post("/", ReviewController.create);
router.put("/:id", ReviewController.update);
router.delete("/:id", ReviewController.remove);

module.exports = router;
*/

const router = require("express").Router();
const ReviewController = require("../controllers/review.controller");
const { auth } = require("../middlewares/auth.middleware");
const { validateReview } = require("../middlewares/validation");

router.get("/:facilityId", ReviewController.getFacilityReviews);

// Authenticated user can create and delete own review
router.use(auth);

router.post("/", validateReview, ReviewController.createReviews);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;