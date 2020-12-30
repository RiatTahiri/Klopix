const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports = async function (req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).send("You must login to access this route.");
  }

  try {
    await jwt.verify(token, process.env.AUTH_TOKEN, (err, user) => {
      if (err)
        return res.status(404).send("There is a error verifying the token");

      req.user = user;
      next();
    });
  } catch (err) {
    res.status(500).send("Error");
  }
};
