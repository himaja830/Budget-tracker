const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

var PORT = process.env.PORT||3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_9nl18b21:9u6jnpa8u604s5je35pqmcthua@ds061076.mlab.com:61076/heroku_9nl18b21",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});