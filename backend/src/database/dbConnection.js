const mongoose = require("mongoose");

const express = require("express");

mongoose.Promise = global.Promise;
//const uri="mongodb+srv://assignment:assignment@cluster0.e4lfz.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb://127.0.0.1:27017/assignment-api-test";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("DB connected");
