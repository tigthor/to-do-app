"use strict";

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });
  app.post('/tasks', function (req, res) {
    var newTask = {
      id: data.length + 1,
      name: req.body.name,
      priority: req.body.priority
    };
    data.push(newTask);
    res.status(201).send(newTask);
  });
  app.use(bodyParser.json());
  app.put('/tasks/:id', function (req, res) {
    var _req$body = req.body,
        title = _req$body.title,
        priority = _req$body.priority;
    var tastWithId = data.find(function (tastId) {
      tastId.id === parseInt(req.params.id);
    });
    taskWithId.name = req.body.name;
    taskWithId.priority = req.body.priority;
    res.send(taskWithId);
  });

  var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app["delete"]('/tasks/:id', function (req, res) {
    var id = req.params.id;
    data = data.filter(function (b) {
      return b.id.replace(/\b/g, '-') !== id;
    });
    res.send("Delete record with id id");
  });
};