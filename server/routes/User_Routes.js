const express = require("express");
const auth = require("../middleware/authentication.js");

const router = express.Router();

const User_Controller = require("../controllers/User_Controller");

router.post("/register", User_Controller.register);
router.post("/login", User_Controller.login);
router.get("/signout", User_Controller.signOut);
router.get("/userID/:id", User_Controller.userById);
router.get("/checkToken", auth, User_Controller.checkToken);
// router.get("/channel/:id");
// router.get("/channelSettings:id", auth);
router.get("/myChannel", auth, User_Controller.myChannel);
router.get("/videoPostedBy/:id", auth, User_Controller.videoPostedBy);

module.exports = router;
