const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book.model");
const { User } = require("../models/user.model");
const { default: sharedConstants } = require("../../sharedConstants");
const USER_LOAN_LIMIT = 3;

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!(mongoose.isValidObjectId(id) && mongoose.isValidObjectId(userId)))
    return res.status(400);

  const bookToLoan = await Book.findById(id);
  const user = await User.findById(userId);

  if (!(bookToLoan && user))
    return res.status(404).send({
      success: false,
      message: "Could not find requested resource.",
    });

  if (bookToLoan.loanedTo.length + 1 > sharedConstants.maxLoanLimit)
    return res.status(500).send({
      success: false,
      message: "Max loan limit reached for this book.",
    });

  if (
    bookToLoan.loanedTo.some(
      (idOfBorrower) => idOfBorrower.toString() === userId,
    )
  )
    return res.status(500).send({
      success: false,
      message: "User is already borrowing this book.",
    });

  if (user.books.length + 1 > USER_LOAN_LIMIT)
    return res.status(500).send({
      success: false,
      message: "Max borrow limit reached for current user.",
    });

  bookToLoan.loanedTo.push(userId);
  user.books.push({
    ...bookToLoan,
    loanedTo: undefined,
    loanCount: 0,
    __v: undefined,
  });

  try {
    await bookToLoan.save();
    await user.save();

    res.status(200).send({
      success: true,
      message: `Successfully loaned out ${bookToLoan.title} to ${user.username}`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
