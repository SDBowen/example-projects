require('dotenv').config();

const db = require('../config/db');

const createProjectTable = `CREATE TABLE IF NOT EXISTS projects (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);`;

const createTaskTable = `CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(255) NOT NULL, status TINYINT(8) NOT NULL DEFAULT '0', updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);`;

const createProjects = `
    INSERT INTO projects (name, updated_at, created_at) VALUES
    ('Demo project', '2019-01-10 23:50:40', '2019-01-10 23:50:40');
  `;
const createTasks = `
    INSERT INTO tasks (description, status, updated_at, created_at) VALUES
    ('Find bugs', 1, '2019-01-10 23:50:40', '2019-01-10 23:50:40'),
    ('Review code', 1, '2019-01-10 23:50:40', '2019-01-10 23:50:40'),
    ('Fix bugs', 1, '2019-01-10 23:50:40', '2019-01-10 23:50:40'),
    ('Refactor Code', 1, '2019-01-10 23:50:40', '2019-01-10 23:50:40'),
    ('Push to prod', 1, '2019-01-10 23:50:40', '2019-01-10 23:50:40');
  `;

db.db.query(createProjectTable, (err, result) => {
  if (err) throw err;
  console.log(result);
});

db.db.query(createTaskTable, (err, result) => {
  if (err) throw err;
  console.log(result);
});

db.db.query(createProjects, (err, result) => {
  if (err) throw err;
  console.log(result);
});

db.db.query(createTasks, (err, result) => {
  if (err) throw err;
  console.log(result);
});

db.db.end();
