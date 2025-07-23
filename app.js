const express = require("express");
const booksPath = require("./routes/books");
const authorsPath = require("./routes/authors");
const authPath = require("./routes/auth");
const usersPath = require("./routes/users");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");
const {notFound, errorHandler} = require("./middlewares/errors");
const dotenv = require("dotenv");
dotenv.config();

mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Connected To MongoDB..."))
        .catch((error) => console.log("Connection Faild To MongoDB!", error));

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/books", booksPath);
app.use("/api/authors", authorsPath);
app.use("/api/auth", authPath);
app.use("/api/users", usersPath);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));