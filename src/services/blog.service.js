const Blog = require("../models/Blog");

exports.createBlog = async (data) => await Blog.create(data);
exports.getAllBlogs = async () => await Blog.find().populate("author");
exports.getBlogById = async (id) => await Blog.findById(id);
exports.updateBlog = async (id, data) => await Blog.findByIdAndUpdate(id, data, { new: true });
exports.deleteBlog = async (id) => await Blog.findByIdAndDelete(id);


// src/services/analytics.service.js
const User = require("../models/User");
const Facility = require("../models/Facility");
const Appointment = require("../models/Appointment");
const Service = require("../models/Service");

exports.getOverviewStats = async () => {
  const users = await User.countDocuments();
  const facilities = await Facility.countDocuments();
  const appointments = await Appointment.countDocuments();
  const services = await Service.countDocuments();
  return { users, facilities, appointments, services };
};

exports.getFacilityStats = async () => {
  return await Facility.aggregate([
    { $group: { _id: "$type", count: { $sum: 1 } } },
  ]);
};