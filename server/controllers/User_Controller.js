const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const User_Schema = require("../models/User_Schema.js");
const { JoiSchema } = require("../validation");

exports.login = async (req, res) => {
  res.send("Hello World from the login page");

  // After finding the user in database
  // Generate a token for user so it can access routes

  if (true) {
    const assignToken = jwt.verify({ name: user.name }, process.env.AUTH_TOKEN);
  } else {
    res.send("Email or password is wrong");
  }
};

exports.register = async (req, res) => {
  const { error } = Joi.validate(req.body, JoiSchema);

  if (error) return res.status(400).send("Something wrong with validation");

  const user = await new User_Schema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();

    res.send("User saved in database");
  } catch (err) {
    res.status(400).send(err);
  }
};
