const Review = require("../models/Review");

exports.createReview = async (data) => await Review.create(data);
exports.getAllReviews = async () => await Review.find().populate("user facility");
exports.getReviewsByFacility = async (id) => await Review.find({ facility: id }).populate("user");
exports.updateReview = async (id, data) => await Review.findByIdAndUpdate(id, data, { new: true });
exports.deleteReview = async (id) => await Review.findByIdAndDelete(id);