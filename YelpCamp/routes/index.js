var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// Root
router.get('/', function(req, res) {
  res.render('landing');
});

// Register form
router.get('/register', function(req, res) {
  res.render('register');
});

// Handle sign up
router.post('/register', function(req, res) {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/register');
    }
    passport.authenticate('local')(req, res, function() {
      req.flash('success', 'Welome to YelpCamp, ' + user.username + '!');
      res.redirect('/campgrounds');
    });
  });
});

// Show login form
router.get('/login', function(req, res) {
  res.render('login');
});

// Handle login
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  }),
  function(req, res) {
    res.send('login logic');
  }
);

// Handle logout
router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'You Have Logged Out.');
  res.redirect('/campgrounds');
});

module.exports = router;
