const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const UserRoutes = require("./routes/User_Routes.js");

const db = require("./db.js");

const morgan = require("morgan");
const body_parser = require("body-parser");

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

db.connectDatabase();

app.use("/user", UserRoutes); // User Routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
