const express = require("express");
const bookRepository = require("./book-repository");

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/books", getBooks);
app.get("/books/:id", getBookById);

app.listen(PORT, () => console.log(">> Book service listening on port ", PORT));

/*************************/
/*************************/
/*************************/

function getBooks(_, res) {
  res.json(bookRepository);
}

function getBookById(req, res) {
  const { id } = req.params;
  const book = bookRepository.find((b) => b.id == id);
  if (book) {
    res.json(book);
  } else {
    res.status(400).json({ message: `No book with the id ${id}` });
  }
}
