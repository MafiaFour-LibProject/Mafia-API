const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    question: String,
    response: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatMessage", chatMessageSchema);