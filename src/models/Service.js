const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: String,
    category: { type: String, enum: ["medication", "vaccine", "test"] },
    description: String,
    stockStatus: { type: String, enum: ["in-stock", "low-stock", "out-of-stock"] },
    price: Number,
    facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility" },
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);