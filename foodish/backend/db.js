require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
// lokeshmelkani
// lokeshmelkani

const mongoDB = async () => {
  await mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("connected to db ");
      const fetchedData = mongoose.connection.db.collection("food_items");
      fetchedData.find({}).toArray(function (err, data) {
        if (err) {
          console.log(err);
          console.log("eereeer");
        } else {
          console.log(data);
          console.log("eereeer");
        }
      });
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

module.exports = mongoDB;

/*
 const fetchedData = mongoose.connection.db.collection("food_items");
        fetchedData.find({}).toArray(function (err, data) {
          if (err) {
            console.log(err);
            console.log("eereeer");
          } else {
            console.log(data);
            console.log("eereeer");
          }
        });

*/
