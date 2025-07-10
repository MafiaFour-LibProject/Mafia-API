const Service = require("../models/Service");

exports.createService = async (data) => await Service.create(data);
exports.getAllServices = async () => await Service.find().populate("facility");
exports.getServiceById = async (id) => await Service.findById(id);
exports.updateService = async (id, data) => await Service.findByIdAndUpdate(id, data, { new: true });
exports.deleteService = async (id) => await Service.findByIdAndDelete(id);