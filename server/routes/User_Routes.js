const express = require("express");
const auth = require('../middleware/authentication.js')

const router = express.Router();

const User_Controller = require("../controllers/User_Controller");

router.post("/register", User_Controller.register);
router.post('/login', User_Controller.login);
router.get('/posts', auth ,User_Controller.posts);

module.exports = router;
