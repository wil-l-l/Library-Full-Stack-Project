const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  let userFound = await User.findOne({ username, password }).select(
    "username -_id",
  );

  if (!userFound)
    return res
      .status(404)
      .send({ success: false, message: "Incorrect username or password" });

  res.status(200).send({
    success: true,
    message: "Successfully logged in.",
    data: userFound,
  });
});

module.exports = router;
