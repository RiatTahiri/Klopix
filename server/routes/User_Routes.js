const e = require("express");
const express = require("express");

const Routes = express.Router();
const User_Controller = require("../controllers/User_Controller");

Routes.get("/", User_Controller);
