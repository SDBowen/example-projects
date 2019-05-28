/* eslint-disable no-console */

const db = require('../config/db.js');

const Task = task => {
  this.task = task.task;
  this.status = task.status;
  this.updated_at = new Date();
  this.created_at = new Date();
};

Task.create = (newTask, result) => {
  db.query('INSERT INTO tasks set ?', newTask, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Task.getById = (taskId, result) => {
  db.query('Select task from tasks where id = ? ', taskId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Task.getAll = result => {
  db.query('Select * from tasks', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('tasks : ', res);

      result(null, res);
    }
  });
};
Task.updateById = (id, task, result) => {
  db.query(
    'UPDATE tasks SET task = ? WHERE id = ?',
    [task.task, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Task.remove = (id, result) => {
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;
