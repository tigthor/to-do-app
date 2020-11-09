const express = require('express');
const Tasks = [];
const CreateTaskController = (req, res) => {
    const newTask = {
        id: Tasks.length + 1,
        TaskName: req.body.TaskName,
        TaskPriority: req.body.TaskPriority
    }
    Tasks.push(newTask);
    return res.status(201).send(Tasks)
};

const getAllTasks = (req, res) => {
    return res.status(200).send(Tasks);
};

const getTasksById = (req, res) => {}

const UpdateTaskController = (req, res) => {
    const findTask = Tasks.find(task => task.id === parseInt(req.params.id));
    if (!findTask) return res.status(404).send('task not found');
    findTask.TaskName = req.body.TaskName;
    findTask.TaskPriority = req.body.TaskPriority;
    res.status(200).send(findTask);
};

const deleteTaskController = (req,res) => {
    const taskToDelete = Tasks.find(task => task.id === parseInt(req.params.id))
    if(!taskToDelete) return res.status(404).json('Oups this task is not here to find and you may be lost');
    const index = Tasks.indexOf(taskToDelete);
    Tasks.splice(index,1);
    res.status(200).json(`task successfully deleted`);
};

const deleteAllTasks = (req, res) => {
    Tasks.splice(0, Tasks.length)
    res.status(200).json('All todo tasks were successfully deleted yu know that you wont find any')
}


module.exports = {
    CreateTaskController,
    getAllTasks,
    UpdateTaskController,
    deleteTaskController,
    deleteAllTasks
}