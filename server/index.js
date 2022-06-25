const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// 모델
const { User } = require("./models/User");

const config = require("./config/key");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", require("./routers/user"));

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});
