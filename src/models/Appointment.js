const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    facility: { type: mongoose.Schema.Types.ObjectId, ref: "Facility" },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    reason: String,
    preferredDate: Date,
    preferredTime: String,
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);