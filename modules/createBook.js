const createdBook = require("../models/book");

async function createBook(req, res, next){
    const Books = req.body;
    console.log(Books);
    try {
        const book = await createdBook.create(Books);
        res.status(201).send(book);
    } catch (error) {
        next(error);
    }
}

module.exports = createBook;