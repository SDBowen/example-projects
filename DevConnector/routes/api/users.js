const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const router = express.Router();

// Load users model
const User = require('../../models/User');

// @Route   GET api/users/test
// @Desc    Test users route
// @Access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

// @Route   GET api/users/register
// @Desc    Register user
// @Access  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    }
    const avatar = gravatar.url(req.body.email, {
      s: '200', // size
      r: 'pg', // rating
      d: 'mm' // default
    });

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password
    });

    bcrypt.genSalt(10, (saltErr, salt) => {
      bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
        if (hashErr) throw hashErr;
        newUser.password = hash;
        newUser
          .save()
          .then(newUserData => res.json(newUserData))
          .catch(err => console.log(err));
      });
    });
  });
});

// @Route   GET api/users/login
// @Desc    Login User / Returning JWT token
// @Access  Public
router.post('/login', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Password Incorrect' });
      }
    });
  });
});

// @Route   GET api/users/current
// @Desc    Return current user
// @Access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
module.exports = router;
