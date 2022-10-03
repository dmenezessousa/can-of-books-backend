"use strict";

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB);

const Books = require("./models/book");

async function clear() {
  try {
    await Books.deleteMany({});
    console.log("Books cleared from DB");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

clear();
