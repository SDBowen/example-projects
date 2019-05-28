/* eslint-disable no-console */

const { db } = require('../config/db.js');

function Project(project) {
  this.name = project.name;
  this.updated_at = new Date();
  this.created_at = new Date();
}

Project.create = (newProject, result) => {
  db.query(
    `
      INSERT INTO projects set ?
    `,
    newProject,
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
Project.getById = (projectId, result) => {
  db.query(
    `
      SELECT * FROM projects WHERE id = ?
    `,
    projectId,
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
Project.getAll = result => {
  db.query(
    `
      Select * from projects
    `,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
      } else {
        console.log('projects : ', res);

        result(null, res);
      }
    }
  );
};
Project.updateById = (id, project, result) => {
  db.query(
    `
      UPDATE projects SET project = ? WHERE id = ?
    `,
    [project.name, id],
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
Project.remove = (id, result) => {
  db.query(
    `
      DELETE FROM projects WHERE id = ?
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

module.exports = Project;
