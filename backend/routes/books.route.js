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
  const trackSavedBooks = [];

  req.body.forEach(async ({ title, authors, summary, tags, type }, index) => {
    let newBook = new Book({
      title,
      authors,
      type: index % 2 === 0 ? "Ebook" : "Audiobook",
      popular: true,
      trending: index % 5 === 0 ? true : null,
    });

    if (summary) newBook.summary = summary;
    if (tags && tags.length > 0) newBook.tags = tags;

    newBook = await newBook.save();
    trackSavedBooks.push(newBook);

    if (trackSavedBooks.length === req.body.length)
      res.status(201).send({
        success: true,
        message: "Successfully added books to library database",
        data: trackSavedBooks,
      });
  });
});

module.exports = router;
