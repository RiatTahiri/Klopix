const express = require("express");
const Router = express.Router();

const Profile_Controller = require("../controllers/Profile_Controller");

Router.get("/profile", Profile_Controller.profile);

module.exports = Router;
