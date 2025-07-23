const express = require("express");
const books = require("./routes/books");
const authors = require("./routes/authors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Connected To MongoDB..."))
        .catch((error) => console.log("Connection Faild To MongoDB!", error));

const app = express();

app.use(express.json());
app.use("/api/books", books);
app.use("/api/authors", authors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));