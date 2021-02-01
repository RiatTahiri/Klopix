const mongoose = require("mongoose");

const Video_Schema = new mongoose.Schema({
  videoName: {
    type: String,
    min: 5,
    max: 150,
    required: true,
  },
  videoUrl: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
  },
  videoDescription: {
    type: String,
    min: 5,
    max: 300,
    required: true,
  },
  videoBy: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
  },
  videoCreatedOn: {
    type: Date,
    default: Date.now(),
  },
  videoLikes: {
    type: Number,
    default: 0,
    required: true,
  },
  videoDislikes: {
    type: Number,
    default: 0,
    required: true,
  },
  videoComments: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Video", Video_Schema);
