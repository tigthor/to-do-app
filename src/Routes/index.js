const express = require('express');

const {
    CreateTaskController,
    getAllTasks,
    UpdateTaskController,
    deleteTaskController,
    deleteAllTasks
} = require('../Controllers/index.js');

const router = express.Router();

router.post('/api/task', CreateTaskController);
router.get('/api/task', getAllTasks);
router.put('/api/task/:id', UpdateTaskController);
router.delete('/api/task/:id', deleteTaskController);
router.delete('/api/task', deleteAllTasks);

module.exports = router;