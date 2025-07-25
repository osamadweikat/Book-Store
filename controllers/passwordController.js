const asyncHandler = require("express-async-handler");
const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * @description Get Forgot Password View
 * @route /passwoed/forgot-password
 * @method GET
 * @access public
 */
module.exports.getForgotPasswordVeiw = asyncHandler((req, res) => {
  res.render("forgot-password");
});

/**
 * @description Send Forgot Password Link
 * @route /passwoed/forgot-password
 * @method POST
 * @access public
 */
module.exports.sendForgotPasswordLink = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json({ message: "uer not found" });
  }
  const secret = process.env.JWT_SECRET_KEY + user.password;
  const token = jwt.sign({ email: user.email, id: user.id }, secret, {
    expiresIn: "10m",
  });
  const link = `http://localhost:5000/password/reset-password/${user._id}/${token}`;

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Reset Password Link</title>
    <style>
      body { font-family: sans-serif; padding: 30px; background: #f1f1f1; }
      .box { background: white; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; text-align: center; }
      a { word-break: break-all; font-size: 18px; }
    </style>
  </head>
  <body>
    <div class="box">
      <h2>Click the link below to reset your password:</h2>
      <a href="${link}">${link}</a>
    </div>
  </body>
  </html>
`);
});

/**
 * @description Get Reset Password View
 * @route /passwoed/reset-password/:userId/:token
 * @method GET
 * @access public
 */
module.exports.getResetPasswordView = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({ message: "uer not found" });
  }
  const secret = process.env.JWT_SECRET_KEY + user.password;
  try {
    jwt.verify(req.params.token, secret);
    res.render("reset-password", { email: user.email });
  } catch (error) {
    console.log(error);
    res.json("Error");
  }

  res.json({ message: "Clik on the link", resetPasswordLink: link });
});

/**
 * @description Reset The Password
 * @route /passwoed/reset-password/:userId/:token
 * @method POST
 * @access public
 */
module.exports.resetThePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({ message: "uer not found" });
  }
  const secret = process.env.JWT_SECRET_KEY + user.password;
  try {
    jwt.verify(req.params.token, secret);
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    user.password = req.body.password;
    await user.save();
    res.render("success-password");
  } catch (error) {
    console.log(error);
    res.json("Error");
  }

  res.json({ message: "Clik on the link", resetPasswordLink: link });
});
