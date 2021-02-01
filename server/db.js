const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDatabase = () => {
  try {
    mongoose.connect(
      process.env.MONGO_KEY,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Database success!!");
      }
    );
  } catch (err) {
    console.log(`Can't Connect To Database ${err}`);
  }
};

module.exports = { connectDatabase };
