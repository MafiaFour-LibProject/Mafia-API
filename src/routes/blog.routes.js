const router = require("express").Router();
const BlogController = require("../controllers/blog.controller");
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getOne);

router.use(protect);
router.post("/", restrictTo("superadmin"), BlogController.create);
router.put("/:id", restrictTo("superadmin"), BlogController.update);
router.delete("/:id", restrictTo("superadmin"), BlogController.remove);

module.exports = router;