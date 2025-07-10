const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    metric: String,
    value: Number,
    label: String,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analytics", analyticsSchema);