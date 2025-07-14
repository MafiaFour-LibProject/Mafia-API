/*
const router = require("express").Router();
const ChatController = require("../controllers/chat.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect);
router.post("/", ChatController.ask);

module.exports = router;
*/

const router = require("express").Router();
const ChatbotController = require("../controllers/chatbot.controller");
const { auth } = require("../middlewares/auth.middleware");

// Authenticated user can chat with the bot
router.post("/", auth, ChatbotController.askChatbot);

module.exports = router;