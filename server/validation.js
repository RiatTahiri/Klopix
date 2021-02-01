const joi = require("joi");

const UserValidation = joi.object({
  name: joi.string().max(50).min(5).required(),
  email: joi.string().email().min(5).required(),
  password: joi.string().min(5).max(1024).required(),
  profile_picture: joi.string().min(5).required(),
});

const VideoValidation = joi.object({
  videoName: joi.string().min(5).max(150).required(),
  videoDesc: joi.string().min(5).max(300).required(),
  videoBy: joi.string().min(5).max(1024).required(),
});

const CommentValidation = joi.object({
  comment: joi.string().max(200).min(5).required(),
  commentedOnVideo: joi.string().min(1).max(1024).required(),
  commentedBy: joi.string().min(1).max(1024).required(),
})

module.exports = { UserValidation, VideoValidation, CommentValidation };
