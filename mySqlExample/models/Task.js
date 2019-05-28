/* eslint-disable no-console */

const { db } = require('../config/db.js');

function Task(task) {
  this.description = task.description;
  this.status = task.status;
  this.updated_at = new Date();
  this.created_at = new Date();
}

Task.create = (newTask, result) => {
  db.query(
    `
      INSERT INTO tasks SET ?
    `,
    newTask,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};
Task.getById = (taskId, result) => {
  db.query(
    `
      SELECT * FROM tasks where id = ?
    `,
    taskId,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Task.getAll = result => {
  db.query(
    `
      SELECT * FROM tasks
    `,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
      } else {
        console.log('tasks : ', res);

        result(null, res);
      }
    }
  );
};
Task.updateById = (id, task, result) => {
  db.query(
    `
      UPDATE tasks SET description = ? WHERE id = ?
    `,
    [task.description, id],
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
  db.query(
    `
      DELETE FROM tasks WHERE id = ?
    `,
    [id],
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

module.exports = Task;
