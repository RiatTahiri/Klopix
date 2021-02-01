const express = require("express");
const Joi = require("joi");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const Video_Schema = require("../models/Video_Schema");
const cloudinary = require("cloudinary");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "_" + file.originalname);
  },
});

const videoFilter = (req, file, cb) => {
  const type = file.mimetype;

  if (type === "video/mp4") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only mp4 videos can be uploaded"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: videoFilter,
  // Setup file filter
}).single("file");

const uploadVideo = (req, res) => {
  const { userId } = req.user;

  upload(req, res, async function (err) {
    // if(err instanceof multer.MulterError) {
    //   return res.status(500).json(`there is a multer error` + err)
    // } else if (err) {
    //   return res.status(500).json(`there is another error` + err)
    // }

    if (err) {
      res.status(404).send(err);
    } else {
      const Thisbody = req.body;

      console.log(Thisbody);

      const saveVideo = new Video_Schema({
        videoName: req.body.title,
        videoUrl: req.body.videoURL,
        videoDescription: req.body.description,
        videoBy: userId,
        videoLikes: 0,
        videoDislikes: 0,
        videoComments: "earth hohoohoh",
      });

      const saved = await saveVideo
        .save()
        .then((response) => {
          res.send(response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

const allVideos = (req, res) => {
  Video_Schema.find()
    .then((videos) => {
      console.log(videos);
      res.send(videos);
    })
    .catch((error) => {
      res.send(error);
    });
};

const watchVideo = (req, res) => {
  Video_Schema.findOne({ _id: req.params.id })
    .then((video) => {
      res.json(video);
      console.log(video);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const searchVideo = (req, res) => {
  const { query } = req.body;

  Video_Schema.find({ videoName: query })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports = { uploadVideo, allVideos, watchVideo, searchVideo };
