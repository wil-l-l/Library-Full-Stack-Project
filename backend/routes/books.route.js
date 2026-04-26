const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

router.get("/", async (req, res) => {
  const books = await Book.find({});

  res.status(200).send({
    success: true,
    message: "Successfully retrieved all books",
    data: books,
  });
});

router.post("/", async (req, res) => {
  const { title, author, summary } = req.body;

  let newBook = new Book({
    title,
    author,
  });

  if (summary) newBook.summary = summary;

  newBook = await newBook.save();

  res.status(201).send({
    success: true,
    message: "Successfully created a book",
    data: newBook,
  });
});

module.exports = router;
