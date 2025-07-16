const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const { auth } = require("../middlewares/authMiddleware");

router.use(auth);

router.get("/profile", UserController.getUserProfile);
router.put("/profile", UserController.updateUserProfile);
router.delete("/delete", UserController.deleteAccount);

module.exports = router;