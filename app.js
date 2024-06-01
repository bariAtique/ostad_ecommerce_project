const express = require("express");
//const router = require("./src/routes/api");
const app = express();

// const rateLimit = require("express-rate-limit");
// const helmet = require("helmet");
// const mongoSanitize = require("express-mongo-sanitize");

// const xss = require("xss-clean");
// const hpp = require("hpp");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
//const path = require("path");

//data base connection

let URL =
  "mongodb+srv://atiquebari:<password>@crudcluster.w3dj1uo.mongodb.net/?retryWrites=true&w=majority&appName=crudCluster";
let option = { user: "atiquebari", pass: "@Tique1986", autoIndex: true };
mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
