const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      immutable: true,
      required: true,
      minlength: 7,
      maxlength: 22,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 200,
    },
  }),
);

module.exports = User;
