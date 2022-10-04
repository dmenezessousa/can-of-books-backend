const Books = require("../models/book");
async function deleteBook(req, res, next) {
  const id = req.params.id;
  try {
    const book = await Books.findByIdAndDelete(id);
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
}

module.exports = deleteBook;

          