require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = process.env.port || 5000;

const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.connect();

app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port: ${port}`);
});
