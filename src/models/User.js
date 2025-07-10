const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "superadmin", "facilityAdmin"],
      default: "user",
    },
    facility: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);