const router = require("express").Router();
const BlogController = require("../controllers/blog.controller");
const { auth, authorize } = require("../middlewares/authMiddleware");
const { validateBlog } = require("../middlewares/validation");

router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);

// Authenticated + Admin routes
router.use(auth, authorize("superadmin", "admin"));

router.post("/", validateBlog, BlogController.createBlog);
router.put("/:id", validateBlog, BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

module.exports = router;