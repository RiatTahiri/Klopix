const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const UserRoutes = require("./routes/User_Routes");

const db = require("./db.js");

const morgan = require("morgan");
db.connectDatabase();

app.use(morgan("dev"));
app.use("/", UserRoutes); // User Routes

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
