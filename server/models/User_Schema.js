import mongoose, { Schema } from "mongoose";

const User_Schema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
  },
  email: {
    type: String,
    required: true,
    min: 5,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024,
  },
  profile_picture: {
    type: String,
    max: 1024,
  },

  createdAccount: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", User_Schema);
