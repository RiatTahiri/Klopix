const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const cookie_parser = require("cookie-parser");

const User_Schema = require("../models/User_Schema.js");
const { UserValidation } = require("../validation");

const login = async (req, res) => {
  // try {
  const { logInemail, logInpassword } = req.body;

  const user = await User_Schema.findOne({ email: logInemail });

  if (!logInemail && !logInpassword) {
    res
      .status(404)
      .json({ message: "Email and Password Fields Are Empty", success: false });
  }

  if (!user) {
    res
      .status(404)
      .json({ message: `Email doesn't not exist`, success: false });
  } else {
    const match = await bcrypt.compare(logInpassword, user.password);

    if (match) {
      const token = jwt.sign(
        { email: logInemail, userId: user._id },
        process.env.AUTH_TOKEN,
        {
          expiresIn: "1h",
        }
      );

      res
        .cookie("accessToken", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 99999999),
          secure: false,
        })
        .status(200)
        .json({
          message: "Signed In",
          success: true,
          token,
        });
    } else {
      res.status(404).json({ message: "Incorrect Password", success: false });
    }
  }
  // } catch (err) {
  //   res
  //     .status(404)
  //     .json({ message: `There was a error ${err}`, success: false });
  // }
};

const register = async (req, res) => {
  const { error } = await UserValidation.validate(req.body);

  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  checkEmail = await User_Schema.findOne({ email: req.body.email });

  if (checkEmail)
    return res
      .status(404)
      .json({ message: "Email already exists", success: false });

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
    res
      .status(200)
      .json({ message: "Account created successfully.", success: true });
  } catch (err) {
    res.status(404).send({ message: err, success: false });
  }
};

const userById = async (req, res) => {
  await User_Schema.findById(req.params.id)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const checkToken = (req, res) => {
  res.send("Accessed");
};

const homepage = (req, res) => {
  // User_Schema.findById(req.params.id)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  res.send("welcome to homepage authed");
};

const comment = (req, res) => {
  const { name, comment } = req.body;

  if (!name && !comment) {
    res.send("fields cannot be empty");
  }

  console.log(req.user);
  console.log("perfect");
};

const signOut = (req, res) => {
  const resCookie = res.clearCookie("accessToken");

  if (!resCookie) {
    res.status(404).json(`Account wasn't logged in.`);
  } else {
    res.status(200).json({ message: "Signed Out", success: true });
  }
};

const myChannel = async (req, res) => {
  const channel = await User_Schema.findOne({ _id: req.user.userId })
    .then(({ name, profile_picture, _id, createdAccount }) => {
      res.send({ name, profile_picture, _id, createdAccount });
    })
    .catch((error) => {
      res.send(error);
    });
};

const videoPostedBy = async (req, res) => {
  const user = await User_Schema.findById({ _id: req.params.id })
    .then(({ name, profile_picture }) => {
      res.send({ name, profile_picture });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  register,
  login,
  signOut,
  checkToken,
  userById,
  homepage,
  comment,
  myChannel,
  videoPostedBy,
};
