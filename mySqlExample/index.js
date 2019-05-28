require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const taskRoute = require('./routes/tasks');

const app = express();
const port = process.env.port || 5000;

app.set('port', port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

taskRoute(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port: ${port}`);
});
