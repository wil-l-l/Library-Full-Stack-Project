const mongoose = require("mongoose");
const { default: sharedConstants } = require("../../sharedConstants");

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
    authors: {
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
    popular: {
      type: Boolean,
    },
    trending: {
      type: Boolean,
    },
    ratingStars: {
      type: Number,
      min: 0,
      max: 5,
    },
    ratings: {
      type: [Object], // { userId : their_rating }
      default: [],
    },
    ratersCount: {
      type: Number,
      min: 0,
      max: 200000,
      default: 0,
    },
    loanCount: {
      type: Number,
      min: 0,
      max: sharedConstants.maxLoanLimit,
      default: 0,
    },
    loanedTo: {
      type: [mongoose.Types.ObjectId], // An array of UserIds
      default: [],
    },
  }),
);

module.exports = Book;
