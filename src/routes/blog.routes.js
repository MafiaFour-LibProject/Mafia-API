/*
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
*/

const router = require("express").Router();
const BlogController = require("../controllers/blog.controller");
const { auth, authorize } = require("../middlewares/auth.middleware");
const { validateBlog } = require("../middlewares/validation");

router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);

// Authenticated + Admin routes
router.use(auth, authorize("superadmin", "admin"));

router.post("/", validateBlog, BlogController.createBlog);
router.put("/:id", validateBlog, BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

module.exports = router;