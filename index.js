const mysql = require("mysql2");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const data = require("./data.json");
const reverseString = require("./reverseString");
const scheduleLogs = require("./script");
app.use(bodyparser.json());

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(3005, () =>
  console.log("Express server is runnig at port no : 3005")
);

app.get("/:s", (req, res) => {
  res.send(reverseString(req.params.s));
});

scheduleLogs();
