const express = require('express');

let data = [{}];

exports.create = (req, res) => {
    const newTask = {
        id: data.length + 1,
        name: req.body.name,
        priority: req.body.priority
    }
    data.push(newTask);
    res.status(201).json(newTask);
};

exports.findAll = (req, res) => {
    res.status(200).json(data);
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {
    const {

        title,
        priority
    } = req.body;
    const tastWithId = data.find(tastId => {
        tastId.id === parseInt(req.params.id);
    });
    taskWithId.name = req.body.name;
    taskWithId.priority = req.body.priority;
    res.send(taskWithId);
};

exports.delete = (req, res) => {
    const {
        id
    } = req.params;
    data = data.filter(b => b.id.replace(/\b/g, '-') !== id);
    res.send(`Delete record with id id`);
};

exports.deleteAll = (req, res) => {
    data.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Tutorials were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all tutorials."
            });
        });
};