const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const UserRoutes = require("./routes/User_Routes");

const db = require("./db.js");

const morgan = require("morgan");
db.connect;

app.use(morgan("dev"));
app.use("/", UserRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
