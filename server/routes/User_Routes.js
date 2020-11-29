const express = require("express");
const auth = require("../middleware/authentication.js");

const router = express.Router();

const User_Controller = require("../controllers/User_Controller");

router.post("/register", User_Controller.register);
router.post("/login", User_Controller.login);
router.get("/signout", User_Controller.signOut);
router.get("/logged", User_Controller.logged);

module.exports = router;
