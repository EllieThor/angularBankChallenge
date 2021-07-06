const express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
var mysql = require("mysql2");
const con = require("./utils/database");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors(corsOptions));

const Servers = require("./routes/serverRoute");
app.use("/servers", Servers);

const Status = require("./routes/statusRoute");
app.use("/servers/status", Status);

app.listen(5004);
