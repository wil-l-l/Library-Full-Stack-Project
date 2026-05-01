const express = require("express");
const app = express();
const mongoose = require("mongoose");
const books = require("./routes/books.route");
const signup = require("./routes/signup.route");
const login = require("./routes/login.route");
const loan = require("./routes/loan.route");

mongoose
  .connect("mongodb://localhost/library")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Could not connect to mongodb: ", err.message));

app.use(express.json());
app.use("/api/books", books);
app.use("/api/signup", signup);
app.use("/api/login", login);
app.use("/api/loan", loan);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
