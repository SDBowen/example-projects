const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Load idea model
require('../models/Idea');

const Idea = mongoose.model('idea');

// Idea index page
router.get('/', (req, res) => {
  Idea.find({})
    .sort({ date: 'desc' })
    .then(ideas => {
      res.render('ideas/index', { ideas });
    });
});

// Add idea form
router.get('/add', (req, res) => {
  res.render('ideas/add');
});

// Edit idea form
router.get('/edit/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  }).then(idea => {
    res.render('ideas/edit', { idea });
  });
});

// Process form
router.post('/', (req, res) => {
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
      req.flash('success_msg', 'Video idea has been added!');
      res.redirect('/ideas');
    });
  }
});

// Edit form process
router.put('/:id', (req, res) => {
  Idea.findOne({
    _id: req.params.id
  }).then(idea => {
    // New values
    idea.title = req.body.title;
    idea.details = req.body.details;

    idea.save().then(idea => {
      req.flash('success_msg', 'Video idea has been updated');
      res.redirect('/ideas');
    });
  });
});

// Delete Idea
router.delete('/:id', (req, res) => {
  Idea.remove({ _id: req.params.id }).then(() => {
    req.flash('success_msg', 'Video idea has been removed');
    res.redirect('/ideas');
  });
});

module.exports = router;
