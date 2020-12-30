const express = require("express");
const auth = require("../middleware/authentication");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Index Route");
});

router.get("/homepage", auth, (req, res) => {
  res.send("Backend message got.");
});

module.exports = router;
