const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const transporter = require("../config/nodemailer");

exports.hashPassword = async (password) => await bcrypt.hash(password, 10);

exports.comparePassword = async (input, hash) => await bcrypt.compare(input, hash);

exports.generateToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3d" });

exports.sendVerificationEmail = async (email, token) => {
  const url = `${process.env.CLIENT_URL}/verify-email/${token}`;
  await transporter.sendMail({
    to: email,
    subject: "Verify Your Email",
    html: `<p>Click <a href='${url}'>here</a> to verify your email</p>`
  });
};