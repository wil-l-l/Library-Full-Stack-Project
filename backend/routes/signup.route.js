const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  let newUser = new User({
    username,
    password,
  });
  newUser = await newUser.save();

  res.status(201).send({
    success: true,
    data: newUser,
    message: "Successfully created new user",
  });
});

module.exports = router;
