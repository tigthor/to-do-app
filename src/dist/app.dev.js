"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({
  extended: false
});
var app = express();
var port = 3000;

require("./Routes/index")(app);

app.listen(port, function () {
  return console.log("Example app listening on port port!");
});