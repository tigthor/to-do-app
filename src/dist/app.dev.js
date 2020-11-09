"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json()); //importing routes

var router = require('./Routes');

app.use(router);
app.listen(3000, function () {
  console.log("server is running well");
});