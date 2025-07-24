const express = require("express");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  getAllBooks,
  getBookById,
  creatBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.route("/").get(getAllBooks).post(verifyTokenAndAdmin, creatBook);

router
  .route("/:id")
  .get(getBookById)
  .put(verifyTokenAndAdmin, updateBook)
  .delete(verifyTokenAndAdmin, deleteBook);

module.exports = router;
