const Books = require("../models/book");

async function updateBook(req, res, next) {
  const id = req.params.id;
  const updatedBook = req.body;

  try {
    const options = {
      new: true,
      overwrite: true,
    };
    const newUpdatedBook = await Books.findByIdAndUpdate(
      id,
      updatedBook,
      options
    );

    res.status(200).send(newUpdatedBook);
  } catch (error) {
    next(error);
  }
}

module.exports = updateBook;
