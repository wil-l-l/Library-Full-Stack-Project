const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.model");
const bcrypt = require("bcrypt");

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

  const salt = await bcrypt.genSalt();
  newUser.password = await bcrypt.hash(password, salt);

  newUser = await newUser.save();

  res.status(201).send({
    success: true,
    data: {
      ...newUser._doc,
      __v: undefined,
      password: undefined,
    },
    message: "Successfully created new user",
  });
});

module.exports = router;
