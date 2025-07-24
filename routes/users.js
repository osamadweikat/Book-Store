const express = require("express");
const router = express.Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const {
  updateUser,
  getAllUseres,
  getUserById,
  deieteUser,
} = require("../controllers/usersController");

router.put("/:id", verifyTokenAndAuthorization, updateUser);

router.get("/", verifyTokenAndAdmin, getAllUseres);

router.get("/:id", verifyTokenAndAuthorization, getUserById);

router.delete("/:id", verifyTokenAndAuthorization, deieteUser);

module.exports = router;
