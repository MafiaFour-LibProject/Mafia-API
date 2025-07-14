/*
const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password", AuthController.resetPassword);
router.get("/verify-email/:token", AuthController.verifyEmail);

module.exports = router;
*/

const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const { validateSignUp, validateLogIn, validatePasswordReset } = require("../middlewares/validation");

router.post("/register", validateSignUp, AuthController.register);
router.post("/login", validateLogIn, AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/forgot-password", validatePasswordReset, AuthController.forgotPassword);
router.post("/reset-password/:token", AuthController.resetPassword);
router.get("/verify-email/:token", AuthController.verifyEmail);

module.exports = router;