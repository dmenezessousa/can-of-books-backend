"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const getBook = require("./modules/getBooks");
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_DB);
const mongoDb = mongoose.connection;
mongoDb.on("error", console.error.bind(console, "Mongo connection error"));
mongoDb.once("open", function () {
  console.log("Mongoose is connected to mongo");
});

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.get("/books", getBook);
app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
