const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");

process.on("uncaughtException", (ex) => {
  console.error("Caught an uncaught exception", ex);
  process.exit(1);
});

process.on("unhandledRejection", () => {
  console.log("Caught an unhandled rejection");
  process.exit(1);
});

if (!config.get("jwtPrivateKey")) {
  console.error("Could not start app.\nError: jwtPrivateKey is not defined");
  process.exit(1);
}

if (!config.get("db")) {
  console.error("Could not start app.\nError: db is not defined");
  process.exit(1);
}

require("./startup/routes")(app);
require("./startup/production")(app);

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Could not connect to mongodb: ", err.message));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
