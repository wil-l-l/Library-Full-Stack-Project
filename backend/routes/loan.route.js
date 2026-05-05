const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book.model");
const { User } = require("../models/user.model");
const { default: sharedConstants } = require("../../sharedConstants");
const {
  default: getUserPartialBookCopy,
} = require("../utils/getUserPartialBookCopy");
const USER_LOAN_LIMIT = 3;
const authToken = require("../middleware/authToken");

router.patch("/:id", authToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const user = await User.findById(userId);

  if (!mongoose.isValidObjectId(id)) return res.status(400);

  const bookToLoan = await Book.findById(id);

  if (!bookToLoan)
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
  user.books.push(getUserPartialBookCopy(bookToLoan));

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

router.patch("/return/:id", authToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const user = await User.findById(userId);

  if (!mongoose.isValidObjectId(id))
    return res.status(400).send({ success: false });

  const bookToReturn = await Book.findById(id);

  if (!bookToReturn)
    return res.status(404).send({
      success: false,
      message: "Could not find requested resource.",
    });

  if (user.books.length === 0)
    return res
      .status(400)
      .send({ success: false, message: "This user has no books to return" });

  const userIndexInBookToReturn =
    bookToReturn.length === 1
      ? 0
      : bookToReturn.loanedTo.findIndex(
          (usersIds) => usersIds.toString() === userId,
        );

  const userBookToReturnIndex =
    user.books.length === 1
      ? 0
      : user.books.findIndex(({ _id }, index) => _id === id);

  if (!(userIndexInBookToReturn >= 0 || userBookToReturnIndex >= 0))
    return res.status(500).send({ success: false });

  bookToReturn.loanedTo.splice(userIndexInBookToReturn, 1);

  user.history.push(user.books[userBookToReturnIndex]);
  user.books.splice(userBookToReturnIndex, 1);

  try {
    await bookToReturn.save();
    await user.save();
    res.status(200).send({
      success: true,
      message: `User successfully returned book`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Could not return book.",
    });
  }
});

module.exports = router;
