const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const { validateSignUp, validateLogIn, validatePasswordReset } = require("../middlewares/validation");

router.post("/register", validateSignUp, AuthController.SignUp);
router.post("/login", validateLogIn, AuthController.Login);
//router.post("/logout", AuthController.logout);
router.post("/forgot-password", validatePasswordReset, AuthController.sendResetLink);
router.post("/reset-password/:token", AuthController.resetPassword);
router.get("/verify-email/:token", AuthController.VerifyEmail);

module.exports = router;