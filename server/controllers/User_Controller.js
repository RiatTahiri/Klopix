const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const User_Schema = require("../models/User_Schema.js");

const validation = Joi.object({
  name: Joi.string().max(50).min(5).required(),
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(5).max(1024).required(),
  profile_picture: Joi.string().min(5).required(),
});

// exports.login = async (req, res) => {
//   // After finding the user in database
//   // Generate a token for user so it can access routes
//   // if (true) {
//   //   const assignToken = jwt.verify({ name: user.name }, process.env.AUTH_TOKEN);
//   // } else {
//   //   res.send("Email or password is wrong");
// //   // }

//   res.send("hello login");
// };

const login = async (req,res) => {
  const { name, email, password, profile_picture } = req.body;

  // Check if email exist

  user = await User_Schema.findOne({ email: req.body.email });

  // Decrypt password 

  if(!user) {
    res.status(400).send('Email doesnt exist');
  } else {
    const match = await bcrypt.compare(password, user.password);

    if(match) {
      const token = jwt.sign({email: email, userId: user._id}, process.env.AUTH_TOKEN, {
        expiresIn: "1h"
      });

      res.send('Logged in and token assigned ' + token);
    } else {
      res.status(400).send('Incorrect password')
    }
  }
}

const register = async (req, res, next) => {
  const { error } = await validation.validate(req.body);

  if (error) {
    return res.status(400).send("Something wrong with validation");
  }

  checkEmail = await User_Schema.findOne({ email: req.body.email });

  if (checkEmail) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User_Schema({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    profile_picture: req.body.profile_picture,
  });

  try {
    const userSaved = await user.save();
    res.send('User saved successfully.' + userSaved);
  } catch (err) {
    res.status(400).send("There is a error: ", err);
  }
};

const posts = (req,res) => {
  res.send('Hello World form posts')
}

module.exports = {
  register,
  login,
  posts
}