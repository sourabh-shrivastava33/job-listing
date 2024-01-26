const express = require("express");
const { login, register, logout } = require("../controllers/authController");
const {
  validateUserRegisterInput,
  validateLoginInput,
} = require("../middleware/validationMiddleware");
const router = express.Router();

router.route("/login").post(validateLoginInput, login);
router.route("/register").post(validateUserRegisterInput, register);
router.route("/logout").get(logout);
module.exports = router;
