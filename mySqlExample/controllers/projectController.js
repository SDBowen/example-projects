const Project = require('../models/Project');

exports.getAllProjects = (req, res) => {
  Project.getAll((err, project) => {
    if (err) res.send(err);
    res.send(project);
  });
};

exports.createProject = (req, res) => {
  const newProject = new Project(req.body);

  if (!newProject.name) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide project name' });
  } else {
    Project.create(newProject, (err, project) => {
      if (err) res.send(err);
      res.json(project);
    });
  }
};

exports.getProject = (req, res) => {
  Project.getById(req.params.projectId, (err, project) => {
    if (err) res.send(err);
    res.json(project);
  });
};

exports.updateProject = (req, res) => {
  Project.updateById(
    req.params.projectId,
    new Project(req.body),
    (err, project) => {
      if (err) res.send(err);
      res.json(project);
    }
  );
};

exports.deleteProject = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Project.remove(req.params.projectId, (err, project) => {
    if (err) res.send(err);
    res.json({ message: 'Project successfully deleted' });
  });
};
