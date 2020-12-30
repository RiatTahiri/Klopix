const express = require("express");
const cookie_parser = require("cookie-parser");
const auth = require("../middleware/authentication.js");

const router = express.Router();

const User_Controller = require("../controllers/User_Controller");

router.post("/register", User_Controller.register);
router.post("/login", User_Controller.login);
router.get("/signout", User_Controller.signOut);
router.get("/userID/:id", User_Controller.userById);
router.get("/checkToken", auth, User_Controller.checkToken);
router.get("/homepage", auth, User_Controller.homepage);
router.post("/comment", auth, User_Controller.comment);

module.exports = router;
