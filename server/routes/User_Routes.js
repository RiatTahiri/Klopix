const e = require("express");
const express = require("express");

const Router = express.Router();
const User_Controller = require("../controllers/User_Controller");

Router.get("/login", User_Controller.login);
Router.post("/register", User_Controller.register);

module.exports = Router;
