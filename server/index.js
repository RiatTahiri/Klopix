const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const cors = require("cors");
const cookie_parser = require("cookie-parser");
const morgan = require("morgan");

const db = require("./db.js");

const cors_settings = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(cors_settings));

/// Routes
const UserRoutes = require("./routes/User_Routes.js");
const IndexRoutes = require("./routes/Index_Routes.js");
const VideoRoutes = require("./routes/Video_Routes");
const CommentRoutes = require('./routes/Comment_Routes')

// Middlewares
app.use(morgan("dev"));
app.use(express.static(__dirname)); // Saving images / Videos for now
app.use(express.json());
app.use(cookie_parser());

db.connectDatabase();

app.use("/", IndexRoutes);
app.use("/user", UserRoutes);
app.use("/video", VideoRoutes);
app.use('/comment', CommentRoutes);

app.listen(port, console.log(`Server Started: ${port}`));
