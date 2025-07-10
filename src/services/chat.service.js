const { CohereClient } = require("cohere-ai");
const ChatMessage = require("../models/ChatMessage");

const cohere = new CohereClient({ token: process.env.COHERE_API_KEY });

exports.askChatbot = async (userId, prompt) => {
  const { text } = await cohere.generate({ prompt, maxTokens: 200 });
  const saved = await ChatMessage.create({ user: userId, question: prompt, response: text });
  return saved;
};