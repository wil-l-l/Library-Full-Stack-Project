const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const { error } = validateUser(req.body);
  if (error)
    return res.status(400).send({
      success: false,
      message: "Incorrect username or password",
    });

  let userFound = await User.findOne({ username }).select(
    "username password books favorites history",
  );

  if (!userFound)
    return res
      .status(404)
      .send({ success: false, message: "Incorrect username or password" });

  const matchedPassword = await bcrypt.compare(password, userFound.password);
  if (!matchedPassword)
    return res
      .status(404)
      .send({ success: false, message: "Incorrect username or password" });

  const userJWT = jwt.sign(
    { ...userFound._doc, password: undefined },
    config.get("jwtPrivateKey"),
  );

  res.status(200).send({
    success: true,
    message: "Successfully logged in.",
    data: userJWT,
  });
});

module.exports = router;
