const Project = require('../models/Project');
const { db } = require('../config/db.js');

exports.getAllProjects = (req, res) => {
  db.query(Project.getAll(), (err, project) => {
    if (err) res.send(err);
    res.send(project);
  });
};

exports.createProject = (req, res) => {
  const project = new Project(req.body.name);
  project.created_at = new Date();

  if (!project.name) {
    res
      .status(400)
      .send({ error: true, message: 'Please provide project name' });
  } else {
    db.query(Project.create(), project, (err, dbResponse) => {
      if (err) res.send(err);
      res.json(dbResponse);
    });
  }
};

exports.getProject = (req, res) => {
  const { id } = req.params;

  db.query(Project.getById(), id, (err, dbResponse) => {
    if (err) res.send(err);
    res.json(dbResponse);
  });
};

exports.updateProject = (req, res) => {
  const { id } = req.params;
  const project = new Project(req.body.name);
  const data = [project, id];

  db.query(Project.updateById(), data, (err, dbResponse) => {
    if (err) res.send(err);
    res.json(dbResponse);
  });
};

exports.deleteProject = (req, res) => {
  const { id } = req.params;

  db.query(Project.remove(), id, err => {
    if (err) res.send(err);
    res.json({ message: 'Project successfully deleted' });
  });
};
