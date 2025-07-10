const router = require("express").Router();
const ChatController = require("../controllers/chat.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect);
router.post("/", ChatController.ask);

module.exports = router;