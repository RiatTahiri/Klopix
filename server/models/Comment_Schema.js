const mongoose = require("mongoose");

const Comment_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  comment: {
    type: String,
    required: true,
    min: 5,
    max: 200,
  },
  commentedOn: {
    type: Date,
    default: Date.now,
  },
  commentedOnVideo: {
    type: String,
    min: 1,
    max: 1024,
    required: true,
  },
});

module.exports = mongoose.Model("Comment", Comment_Schema);
