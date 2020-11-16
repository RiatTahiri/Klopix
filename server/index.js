const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const User_Routes

const database = require("db.js");

const morgan = require("morgan");
database.connect();

app.use(morgan("dev"));
app.use("/", UserRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
