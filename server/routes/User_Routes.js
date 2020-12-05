const express = require("express");
const auth = require("../middleware/authentication.js");

const router = express.Router();

const User_Controller = require("../controllers/User_Controller");

router.post("/register", User_Controller.register);
router.post("/login", User_Controller.login);
router.get("/signout", User_Controller.signOut);
router.get("/profile", User_Controller.profile);

module.exports = router;
