const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors");
const cookie_parser = require("cookie-parser");
const morgan = require("morgan");
const body_parser = require("body-parser");

const db = require("./db.js");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/// Routes

const UserRoutes = require("./routes/User_Routes.js");
const IndexRoutes = require("./routes/Index_Routes.js");
const ProfileRoutes = require("./routes/Profile_Routes.js");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookie_parser());

db.connectDatabase();

app.use("/user", UserRoutes);
app.use("/profile", ProfileRoutes);

app.listen(port, console.log(`Listening on port ${port}`));
