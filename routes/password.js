const express = require("express");
const {
  getForgotPasswordVeiw,
  sendForgotPasswordLink,
  getResetPasswordView,
  resetThePassword,
} = require("../controllers/passwordController");
const router = express.Router();

router
  .route("/forgot-password")
  .get(getForgotPasswordVeiw)
  .post(sendForgotPasswordLink);

router
  .route("/reset-password/:userId/:token")
  .get(getResetPasswordView)
  .post(resetThePassword);

module.exports = router;
