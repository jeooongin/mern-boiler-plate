const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: String,
  userNum: Number,
});

const Counter = mongoose.model("Counter1", counterSchema);

module.exports = { Counter };
