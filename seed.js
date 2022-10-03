"use strict";

const { default: mongoose } = require("mongoose");

require("dotenv").config();
mongoose.connect(process.env.MONGO_DB);

const Books = require("./models/book");

async function seed() {

  await Books.create({
    title: "Harry Potter",
    description: "Nerd Wiz",
    status: "read",
  });
  console.log("Harry Potter was added");

  await Books.create({
    title: "Harry Potter 2",
    description: "Nerd Wiz 2",
    status: "read",
  });
  console.log("Harry Potter 2 was added");

  await Books.create({
    title: "Harry Potter 3",
    description: "Nerd Wiz 3",
    status: "read",
  });
  console.log("Harry Potter 3 was added");

  mongoose.disconnect();
}

seed();
