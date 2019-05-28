const todo = require('../controllers/taskController');

const taskRoute = app => {
  app
    .route('/tasks')
    .get(todo.getAllTasks)
    .post(todo.createTask);

  app
    .route('/tasks/:taskId')
    .get(todo.getTask)
    .put(todo.updateTask)
    .delete(todo.deleteTask);
};

module.exports = taskRoute;
