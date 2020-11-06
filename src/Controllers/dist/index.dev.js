"use strict";

var express = require('express');

var data = [{}];

exports.create = function (req, res) {
  var newTask = {
    id: data.length + 1,
    name: req.body.name,
    priority: req.body.priority
  };
  data.push(newTask);
  res.status(201).json(newTask);
};

exports.findAll = function (req, res) {
  res.status(200).json(data);
};

exports.findOne = function (req, res) {};

exports.update = function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      priority = _req$body.priority;
  var tastWithId = data.find(function (tastId) {
    tastId.id === parseInt(req.params.id);
  });
  taskWithId.name = req.body.name;
  taskWithId.priority = req.body.priority;
  res.send(taskWithId);
};

exports["delete"] = function (req, res) {
  var id = req.params.id;
  data = data.filter(function (b) {
    return b.id.replace(/\b/g, '-') !== id;
  });
  res.send("Delete record with id id");
};

exports.deleteAll = function (req, res) {
  data.deleteMany({}).then(function (data) {
    res.send({
      message: "".concat(data.deletedCount, " Tutorials were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all tutorials."
    });
  });
};