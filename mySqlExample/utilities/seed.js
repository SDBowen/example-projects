require('dotenv').config();

const { db } = require('../config/db');

const dropTaskTable = `
    DROP TABLE IF EXISTS tasks;
  `;

const dropProjectTable = `
    DROP TABLE IF EXISTS projects;
  `;

const createProjectTable = `
    CREATE TABLE IF NOT EXISTS projects 
    ( 
       id         INT auto_increment PRIMARY KEY,
       name       VARCHAR(255), 
       updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
       created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
       ); 
       `;

const createTaskTable = `
       CREATE TABLE IF NOT EXISTS tasks 
       ( 
         id          INT auto_increment PRIMARY KEY, 
         project_id  INT NOT NULL references projects(id),     
         description VARCHAR(255) NOT NULL, 
         status      TINYINT(8) NOT NULL DEFAULT 0, 
         updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
         created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
      ); 
  `;

const createProjects = `
    INSERT INTO
      projects (name, updated_at, created_at)
    VALUES
      (
        'Demo project',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      ); 
  `;
const createTasks = `
    INSERT INTO
      tasks (project_id, description, updated_at, created_at)
    VALUES
      (
        1,
        'Find bugs',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      ),
      (
        1,
        'Review code',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      ),
      (
        1,
        'Fix bugs',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      ),
      (
        1,
        'Refactor Code',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      ),
      (
        1,
        'Push to prod',
        '2019-01-10 23:50:40',
        '2019-01-10 23:50:40'
      );
  `;

db.query(dropTaskTable, (err, result) => {
  if (err) throw err;
  console.log('Dropped tasks table...');
});

db.query(dropProjectTable, (err, result) => {
  if (err) throw err;
  console.log('Dropped projects table...');
});

db.query(createProjectTable, (err, result) => {
  if (err) throw err;
  console.log('Created projects table...');
});

db.query(createTaskTable, (err, result) => {
  if (err) throw err;
  console.log('Dropped tasks table...');
});

db.query(createProjects, (err, result) => {
  if (err) throw err;
  console.log('Created project records...');
});

db.query(createTasks, (err, result) => {
  if (err) throw err;
  console.log('Created task records...');
});

db.end();
