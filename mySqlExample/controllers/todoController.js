const Task = require('../models/task');

exports.getAllTasks = (req, res) => {
  Task.getAll((err, task) => {
    if (err) res.send(err);
    res.send(task);
  });
};

exports.createTask = (req, res) => {
  const newTask = new Task(req.body);

  if (!newTask.task || !newTask.status) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide task/status' });
  } else {
    Task.create(newTask, (err, task) => {
      if (err) res.send(err);
      res.json(task);
    });
  }
};

exports.getTask = (req, res) => {
  Task.getById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  Task.updateById(req.params.taskId, new Task(req.body), (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.deleteTask = (req, res) => {
  Task.remove(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
