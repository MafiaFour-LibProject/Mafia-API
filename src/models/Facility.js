const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema(
  {
    name: String,
    type: { type: String, enum: ["hospital", "pharmacy"] },
    location: String,
    coords: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
    openingHours: String,
    closingHours: String,
    image: String,
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", facilitySchema);