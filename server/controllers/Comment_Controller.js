const express = require("express");
const CommentSchema = require("../models/Comment_Schema");
const { CommentValidation } = require("../validation");

const comment = async (req, res) => {
  const { error } = await CommentValidation.validate(req.body);
  const { userId } = req.user;

  if (error) {
    res.status(404).json({ message: error, success: false });
  }

  const saveComment = new CommentSchema({
    comment: req.body.comment,
    commentedOnVideo: req.body.commentedOnVideo,
    commentedBy: userId,
  });

  try {
    await saveComment
      .save()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  } catch (error) {
    res.status(404).json(error);
  }
};

const allComments = (req, res) => {
  CommentSchema.find()
    .then((comments) => {
      console.log(comments);
      res.send(comments);
    })
    .catch((error) => {
      res.send(error);
    });
};

const checkComment = (req, res) => {
  res.send("comment routes work");
};

module.exports = { checkComment, comment, allComments };
