const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

// assign port for server or localhost
const port = process.env.PORT || 5000;

// Pass port to express
app.listen(port, () => console.log(`Server running on port ${port}`));
