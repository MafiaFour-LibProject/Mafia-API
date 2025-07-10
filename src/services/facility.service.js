const Facility = require("../models/Facility");

exports.createFacility = async (data) => await Facility.create(data);
exports.getAllFacilities = async () => await Facility.find().populate("services");
exports.getFacilityById = async (id) => await Facility.findById(id).populate("services");
exports.updateFacility = async (id, data) => await Facility.findByIdAndUpdate(id, data, { new: true });
exports.deleteFacility = async (id) => await Facility.findByIdAndDelete(id);