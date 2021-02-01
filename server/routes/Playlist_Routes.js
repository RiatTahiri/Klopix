const express = require("express");
const router = express.Router();

router.get("/playlist/:id", (req, res) => {
  res.send("uniquie playlist with id");
});

module.exports = router;
