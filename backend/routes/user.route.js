const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const Book = require("../models/book.model");
const {
  default: getUserPartialBookCopy,
} = require("../utils/getUserPartialBookCopy");

router.post("/favorite/:id", async (req, res) => {
  const bookId = req.params.id;
  const { userId } = req.body;

  const user = await User.findById(userId);
  const book = await Book.findById(bookId);

  if (!(user && book))
    return res.status(404).send({
      success: false,
      message: "Could not find requested resource.",
    });

  if (user.favorites.some(({ _id }) => _id === bookId))
    return res.status(404).send({
      success: false,
      message: "Book is already favorited",
    });

  user.favorites.push(getUserPartialBookCopy(book));

  try {
    user.save();
    res.status(200).send({
      success: true,
      message: `Succesfully favorited book: ${book.title}`,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Could not add ${book.title} to ${user.username}'s favorites`,
    });
  }
});

module.exports = router;
