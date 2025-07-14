/*
const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect);
router.get("/profile", UserController.getProfile);
router.put("/profile", UserController.updateProfile);
router.delete("/account", UserController.deleteAccount);
router.get("/dashboard", UserController.getDashboard);
router.post("/chatbot", UserController.useChatbot);

module.exports = router;
*/


const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { auth } = require("../middlewares/auth.middleware");

router.use(auth);

router.get("/profile", UserController.getUserProfile);
router.put("/profile", UserController.updateUserProfile);
router.delete("/delete", UserController.deleteAccount);

module.exports = router;
