const router = require("express").Router();
const ChatbotController = require("../controllers/chatbot.controller");
const { auth } = require("../middlewares/authMiddleware");

// Authenticated user can chat with the bot
router.post("/", auth, ChatbotController.askChatbot);

module.exports = router;