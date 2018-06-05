const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Map global promise - get rid of consol warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose
  .connect('mongodb://localhost/vidjot-dev')
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

// Load idea model
require('./models/Idea');

const Idea = mongoose.model('idea');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title
  });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

// Idea index page
app.get('/ideas', (req, res) => {
  Idea.find({})
    .sort({ date: 'desc' })
    .then(ideas => {
      res.render('ideas/index', { ideas });
    });
});

// Add idea form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add');
});

// Process form
app.post('/ideas', (req, res) => {
  const errors = [];

  if (!req.body.title) {
    errors.push({ text: 'Please add a title' });
  }

  if (!req.body.details) {
    errors.push({ text: 'Please add some details' });
  }

  if (errors.length > 0) {
    res.render('ideas/add', {
      errors,
      title: req.body.title,
      details: req.body.details
    });
  } else {
    const newUser = {
      title: req.body.title,
      details: req.body.details
    };
    new Idea(newUser).save().then(idea => {
      res.redirect('/ideas');
    });
  }
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
