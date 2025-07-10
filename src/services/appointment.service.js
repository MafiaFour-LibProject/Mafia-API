const Appointment = require("../models/Appointment");

exports.createAppointment = async (data) => await Appointment.create(data);
exports.getAllAppointments = async () => await Appointment.find().populate("user facility service");
exports.getAppointmentsByFacility = async (id) => await Appointment.find({ facility: id });
exports.updateAppointment = async (id, data) => await Appointment.findByIdAndUpdate(id, data, { new: true });
exports.deleteAppointment = async (id) => await Appointment.findByIdAndDelete(id);