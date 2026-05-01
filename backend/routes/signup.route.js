const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.model");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const { error } = validateUser(req.body);
  if (error)
    return res.status(400).send({
      success: false,
      message: `Could not create user: ${error.details[0].message}`,
    });

  const users = await User.find();
  if (users.some((userObj) => userObj.username === username))
    return res.status(400).send({
      success: false,
      message: "Username already taken. Please try again.",
    });

  let newUser = new User({
    username,
    password,
  });
  newUser = await newUser.save();

  res.status(201).send({
    success: true,
    data: {
      ...newUser._doc,
      __v: undefined,
    },
    message: "Successfully created new user",
  });
});

module.exports = router;
