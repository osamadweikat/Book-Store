const express = require("express");
const logger = require("./middlewares/logger");
const { notFound, errorHandler } = require("./middlewares/errors");
const connectToDB = require("./config/db");
require("dotenv").config();
const path = require("path");

connectToDB();

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use("/api/books", require("./routes/books"));
app.use("/api/authors", require("./routes/authors"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/upload", require("./routes/upload"));
app.use("/password", require("./routes/password"));
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
