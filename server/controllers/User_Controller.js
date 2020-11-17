const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const Joi = require("joi");

const router = express.Router();

const User_Schema = require("../models/User_Schema.js");
const { JoiSchema } = require("../validation");

const login = async (req, res) => {};

router.post("/register", async (req, res) => {
  const { error } = Joi.validate(req.body, JoiSchema);

  if (error) return res.status(400).send("Something wrong with validation");

  const user = new User_Schema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
