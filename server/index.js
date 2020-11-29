const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const UserRoutes = require("./routes/User_Routes.js");
const cookie_parser = require("cookie-parser");
const createError = require("http-errors");

const db = require("./db.js");

const morgan = require("morgan");
const body_parser = require("body-parser");

app.use(cors());
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cookie_parser());

// Error handler

db.connectDatabase();

app.use("/user", UserRoutes); // User Routes

app.all("*", (req, res, next) => {
  const err = createError(404, `Can't Find this route`);
  next(err);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
