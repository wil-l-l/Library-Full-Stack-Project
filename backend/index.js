const express = require("express");
const app = express();
const mongoose = require("mongoose");
const books = require("./routes/books.route");
const signup = require("./routes/signup.route");
const login = require("./routes/login.route");

mongoose
  .connect("mongodb://localhost/library")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Could not connect to mongodb: ", err.message));

app.use(express.json());
app.use("/api/books", books);
app.use("/api/signup", signup);
app.use("/api/login", login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
