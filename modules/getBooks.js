const Books = require("../models/book");
async function getBook(req, res){
    try {
        const booksData = await Books.find();
        res.status(200).send(booksData);
    } catch (error) {
        res.status(500).send("message: " ,error)
    }
};

module.exports = getBook;