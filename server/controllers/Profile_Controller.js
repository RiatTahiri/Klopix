const express = require("express");
const cookie_parser = require("cookie-parser");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const profile = (req, res) => {
  res.send("hello World");
};

module.exports = { profile };
