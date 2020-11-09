"use strict";

var express = require('express');

var _require = require('../Controllers/index.js'),
    CreateTaskController = _require.CreateTaskController,
    getAllTasks = _require.getAllTasks,
    UpdateTaskController = _require.UpdateTaskController,
    deleteTaskController = _require.deleteTaskController,
    deleteAllTasks = _require.deleteAllTasks;

var router = express.Router();
router.post('/api/task', CreateTaskController);
router.get('/api/task', getAllTasks);
router.put('/api/task/:id', UpdateTaskController);
router["delete"]('/api/task/:id', deleteTaskController);
router["delete"]('/api/task', deleteAllTasks);
module.exports = router;