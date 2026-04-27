const mongoose = require("mongoose");

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      immutable: true,
      minlength: 2,
      maxlength: 200,
    },
    author: {
      type: [String],
      required: true,
      immutable: true,
    },
    summary: {
      type: String,
      minlength: 3,
      maxlength: 2000,
      default: "No summary available for this book.",
    },
    tags: {
      type: [String],
      default: [],
    },
    type: {
      type: String,
      required: true,
    },
  }),
);

module.exports = Book;
