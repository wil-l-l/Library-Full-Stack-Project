const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    immutable: true,
    required: true,
    minlength: 7,
    maxlength: 22,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 300,
    select: false,
  },
  books: {
    type: [Object],
    default: [],
  },
  favorites: {
    type: [Object], // Partial copies of book documents
    default: [],
  },
  history: {
    type: [Object], // Partial copies of book documents
    default: [],
  },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    { ...this, password: undefined },
    config.get("jwtPrivateKey"),
  );
};

const User = mongoose.model("User", userSchema);

function validateUser(reqBody) {
  const schema = Joi.object({
    username: Joi.string().min(7).max(22).required(),
    password: Joi.string().min(8).max(300).required(),
  });

  return schema.validate(reqBody);
}

exports.User = User;
exports.validateUser = validateUser;
