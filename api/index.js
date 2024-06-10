const express = require("express");
const cors = require("cors");
// const cookieSession = require("cookie-session");

const axios = require("axios");
const path = require("path");

const userRoute = require("./routes/user");
const datasetRoute = require("./routes/dataset");
const formRoute = require("./routes/form");
const videoRoute = require("./routes/video");
const scheduleRoute = require("./routes/schedule");

//process.env.NODE_ENV = "dev";
console.log("Configured Environment is " + process.env.NODE_ENV);

console.log("directory is " + __dirname);
console.log(
  "environment is " + path.join(__dirname, `.env.${process.env.NODE_ENV}`)
);
const app = express();
require("dotenv").config({
  path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});
const port = process.env.PORT || 5000;

console.log("Port is " + port);

const db = require("./db");

console.log("directory is " + __dirname);
console.log("Port is" + port);

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

//app.use(express.static(path.join(__dirname, "./public")));
app.use("/images", express.static(path.join(__dirname, "upload/onvideo")));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/dataset", datasetRoute);
app.use("/form", formRoute);
app.use("/video", videoRoute);
app.use("/schedule", scheduleRoute);

app.listen(port, () => {
  console.log("Server is running!");
});
