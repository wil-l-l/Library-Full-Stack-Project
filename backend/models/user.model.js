const mongoose = require("mongoose");
const Joi = require("joi");

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
    books: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
  }),
);

function validateUser(reqBody) {
  const schema = Joi.object({
    username: Joi.string().min(7).max(22).required(),
    password: Joi.string().min(8).max(200).required(),
  });

  return schema.validate(reqBody);
}

exports.User = User;
exports.validateUser = validateUser;
