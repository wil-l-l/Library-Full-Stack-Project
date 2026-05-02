const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const Book = require("../models/book.model");
const {
  default: getUserPartialBookCopy,
} = require("../utils/getUserPartialBookCopy");
const { default: validateIdList } = require("../utils/validateIdList");

async function getAndVerifyIdsAndUserAndBook(req, res) {
  const bookId = req.params.id;
  const { userId } = req.body;

  const validIdsResult = validateIdList([bookId, userId], res);
  if (validIdsResult !== 0) return validIdsResult;

  const user = await User.findById(userId);
  const book = await Book.findById(bookId);

  if (!(user && book))
    return res.status(404).send({
      success: false,
      message: "Could not find requested resource.",
    });

  return { bookId, userId, book, user };
}

router.patch("/favorite/:id", async (req, res) => {
  const response = await getAndVerifyIdsAndUserAndBook(req, res);
  if (Object.hasOwn(response, "userId") === false) return response;
  const { bookId, userId, book, user } = response;

  if (user.favorites.some(({ _id }) => _id === bookId))
    return res.status(400).send({
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

router.patch("/unfavorite/:id", async (req, res) => {
  const response = await getAndVerifyIdsAndUserAndBook(req, res);
  if (Object.hasOwn(response, "userId") === false) return response;
  const { bookId, userId, book, user } = response;

  if (user.favorites.length === 0)
    return res.status(400).send({
      success: false,
      message: "User does not have any books to unfavorite",
    });

  const indexOfUnfavorite =
    user.favorites.length > 1
      ? user.favorites.findIndex(({ _id }) => bookId === _id)
      : 0;

  user.favorites.splice(indexOfUnfavorite, 1);

  await user.save();

  res.status(200).send({
    success: true,
    message: "Successfully unfavorited book",
    data: user,
  });
});

module.exports = router;
