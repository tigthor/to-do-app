"use strict";

var express = require('express');

var Tasks = [];

var CreateTaskController = function CreateTaskController(req, res) {
  var newTask = {
    id: Tasks.length + 1,
    TaskName: req.body.TaskName,
    TaskPriority: req.body.TaskPriority
  };
  Tasks.push(newTask);
  return res.status(201).send(Tasks);
};

var getAllTasks = function getAllTasks(req, res) {
  return res.status(200).send(Tasks);
};

var getTasksById = function getTasksById(req, res) {};

var UpdateTaskController = function UpdateTaskController(req, res) {
  var findTask = Tasks.find(function (task) {
    return task.id === parseInt(req.params.id);
  });
  if (!findTask) return res.status(404).send('task not found');
  findTask.TaskName = req.body.TaskName;
  findTask.TaskPriority = req.body.TaskPriority;
  res.status(200).send(findTask);
};

var deleteTaskController = function deleteTaskController(req, res) {
  var taskToDelete = Tasks.find(function (task) {
    return task.id === parseInt(req.params.id);
  });
  if (!taskToDelete) return res.status(404).json('Oups this task is not here to find and you may be lost');
  var index = Tasks.indexOf(taskToDelete);
  Tasks.splice(index, 1);
  res.status(200).json("task successfully deleted");
};

var deleteAllTasks = function deleteAllTasks(req, res) {
  Tasks.splice(0, Tasks.length);
  res.status(200).json('All todo tasks were successfully deleted yu know that you wont find any');
};

module.exports = {
  CreateTaskController: CreateTaskController,
  getAllTasks: getAllTasks,
  UpdateTaskController: UpdateTaskController,
  deleteTaskController: deleteTaskController,
  deleteAllTasks: deleteAllTasks
};