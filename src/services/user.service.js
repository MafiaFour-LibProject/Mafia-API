const User = require("../models/User");

exports.getUserById = async (id) => await User.findById(id);
exports.updateUser = async (id, data) => await User.findByIdAndUpdate(id, data, { new: true });
exports.deleteUser = async (id) => await User.findByIdAndDelete(id);
exports.getAllUsers = async () => await User.find();