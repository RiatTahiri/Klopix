const mongoose = require("mongoose");

const Comment_Schema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    min: 5,
    max: 200,
  },
  commentedOnVideo: {
    type: String,
    min: 1,
    max: 1024,
    required: true,
  },
  commentedBy: {
    type: String,
    min: 1,
    max: 1024,
    required: true,
  },
  commentedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", Comment_Schema);
