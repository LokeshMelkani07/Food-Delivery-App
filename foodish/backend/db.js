require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// lokeshmelkani
// lokeshmelkani

const mongoDB = async () => {
  await mongoose.connect(process.env.DATABASE);
};

module.exports = mongoDB;
