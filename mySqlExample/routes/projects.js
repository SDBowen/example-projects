const todo = require('../controllers/projectController');

const projectRoute = app => {
  app
    .route('/projects')
    .get(todo.getAllProjects)
    .post(todo.createProject);

  app
    .route('/projects/:projectId')
    .get(todo.getProject)
    .put(todo.updateProject)
    .delete(todo.deleteProject);
};

module.exports = projectRoute;
