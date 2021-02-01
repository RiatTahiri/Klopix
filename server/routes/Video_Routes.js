const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");

const Video_Controller = require("../controllers/Video_Controller");

router.post("/uploadVideo", auth, Video_Controller.uploadVideo);

router.get("/videos", auth, Video_Controller.allVideos);

router.get("/edit/:id", (req, res) => {
  res.send("editing video.");
});

router.get("/search", auth, Video_Controller.searchVideo);

router.get("/watchVideo/:id", auth, Video_Controller.watchVideo);

router.get("/videolike/:id", (req, res) => {
  res.send("video liked");
});

router.get("/videodislike/:id", (req, res) => {
  res.send("video disliked");
});

router.get("/videocomment/:id", (req, res) => {
  res.send("commented on video");
});

// router.get("/myVideos", auth, Video_Controller.usersVideos);

module.exports = router;
