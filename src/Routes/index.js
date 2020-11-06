module.exports = app => {
    const todoTasks = require('../Controllers/index');
    const router = require('express').Router();

    router.get('/tasks', todoTasks.findAll);
    router.post('/tasks', todoTasks.create);
    router.put('/tasks/:id', todoTasks.update);
    router.delete('/tasks/', todoTasks.deleteAll);
    router.delete('/tasks/:id', todoTasks.delete);

    app.use('/api', router);
};