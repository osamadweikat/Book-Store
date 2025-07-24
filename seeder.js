const {Book} = require("./models/Book");
const {books} = require("./data");
const connectToDb = require("./config/db");
require("dotenv").config();

connectToDb();

const importBooks = async () => {
    try {
        await Book.insertMany(books);
        console.log("Books Imported");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const removwBooks = async () => {
    try {
        await Book.deleteMany();
        console.log("Books Removed!");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if(process.argv[2] === "-import"){
    importBooks();
}else if(process.argv[2] === "-remove"){
    removwBooks();
}