const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true }, () => {
      console.log("Connected To Database");
    });
  } catch (err) {
    console.log(`Can't Connect To Database ${err}`);
  }
};

module.exports = connect;
