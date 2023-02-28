const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;
const mongoDB = require("./db");

mongoDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Backend connected at port ${port}`);
});
