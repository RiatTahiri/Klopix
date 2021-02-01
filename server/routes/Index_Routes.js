const express = require("express");
const auth = require("../middleware/authentication");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Index Route");
});

module.exports = router;
