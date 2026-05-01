const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/book.model");
const { User } = require("../models/user.model");

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

  bookToLoan.loanedTo.push(userId);
  user.borrowCount += 1;

  try {
    await bookToLoan.save();
    await user.save();
    res.status(200).send({
      success: true,
      message: `Successfully loaned out ${bookToLoan.title}to ${user.username}`,
      data: bookToLoan,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
