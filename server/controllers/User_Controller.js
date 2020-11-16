const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const User_Schema = require("../models/User_Schema.js");

const Router = express.Router();

Router.get("/register", (req, res) => {
    const 
});

Router.get("/login", (req, res) => {
  res.send("register");
});
