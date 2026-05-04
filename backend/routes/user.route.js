const express = require("express");
const router = express.Router();
const { User } = require("../models/user.model");
const Book = require("../models/book.model");
const {
  default: getUserPartialBookCopy,
} = require("../utils/getUserPartialBookCopy");
const { default: validateIdList } = require("../utils/validateIdList");
const authToken = require("../middleware/authToken");

async function getAndVerifyIdsAndUserAndBook(req, res) {
  const bookId = req.params.id;
  const { userId } = req.body;
  const user = req.user;

  const validIdsResult = validateIdList([bookId, userId], res);
  if (validIdsResult !== 0) return validIdsResult;

  const book = await Book.findById(bookId);

  if (!book)
    return res.status(404).send({
      success: false,
      message: "Could not find requested resource.",
    });

  return { bookId, userId, book, user };
}

router.get("/me", authToken, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.patch("/favorite/:id", authToken, async (req, res) => {
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

router.patch("/unfavorite/:id", authToken, async (req, res) => {
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

router.patch("/rate/:id", authToken, async (req, res) => {
  const response = await getAndVerifyIdsAndUserAndBook(req, res);
  if (Object.hasOwn(response, "userId") === false) return response;
  const { bookId, userId, book, user } = response;
  const { rating: userRating } = req.body;

  const userBookToRate = user.history.find(({ _id }) => _id === bookId);
  if (!userBookToRate)
    return res.status(400).send({
      success: true,
      message:
        "User does not have book in their borrow history, cannot perform this request",
    });

  if (!(userRating >= 0 && userRating <= 5))
    return res.status(400).send({
      success: true,
      message:
        "Rating must be greater than or equal to 0, and less than or equal to 5",
    });

  let hasRatedBook = false;
  if (
    book.ratings.some((obj) => {
      if (obj.userId === userId) {
        obj.rating = userRating;
        return true;
      }
    })
  )
    hasRatedBook = true;

  userBookToRate.rated = true;
  userBookToRate.rating = userRating;

  if (hasRatedBook === false)
    book.ratings.push({
      userId,
      rating: userRating,
    });

  book.ratersCount = book.ratings.length;

  book.ratingStars =
    book.ratings.length === 0
      ? userRating
      : book.ratings.reduce(
          (accumulator, { rating }) => rating + accumulator,
          0,
        ) / book.ratings.length;

  const ranges = [
    [0, 0.5],
    [0.5, 1.0],
    [1.0, 1.5],
    [1.5, 2.0],
    [2.0, 2.5],
    [2.5, 3.0],
    [3.0, 3.5],
    [3.5, 4.0],
    [4.0, 4.5],
    [4.5, 5.0],
  ];

  let foundMatch = false;
  ranges.forEach((limit) => {
    if (foundMatch === true) return;

    const lowerLimit = limit[0];
    const upperLimit = limit[1];

    if (!(book.ratingStars <= upperLimit)) return;
    foundMatch = true;

    const lowerDifference = book.ratingStars - lowerLimit;
    const upperDifference = upperLimit - book.ratingStars;

    if (upperDifference <= lowerDifference) book.ratingStars = upperLimit;
    else book.ratingStars = lowerLimit;
  });

  book.markModified("ratings");
  user.markModified("history");

  try {
    await book.save();
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "Successfully rated book", data: user });
  } catch (error) {
    res
      .status(400)
      .send({ success: false, message: "Could not perform rating" });
  }

  return;
});

module.exports = router;
