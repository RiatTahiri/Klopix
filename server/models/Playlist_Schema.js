const mongoose = require("mongoose");

const Playlist_Schema = new mongoose.Schema({
  playlistName: {
    type: String,
    min: 5,
    max: 60,
    required: true,
  },
  playlistThumbnail: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
  },
  createdBy: {
    type: String,
    min: 3,
    max: 1024,
    required: true,
  },
  createdOn: {
    type: Date(),
    default: Date.now(),
  },
});

module.exports = mongoose.model("Playlist_Schema", Playlist_Schema);
