require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = process.env.port || 5000;

const projects = require('./routes/projects');
const tasks = require('./routes/tasks');

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.connect();

app.use('/projects', projects);
app.use('/tasks', tasks);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 501);
  res.json({
    error: {
      code: err.status || 501,
      message: err.message
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port: ${port}`);
});
