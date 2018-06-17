const express = require('express');
const router = express.Router();

// @Route   GET api/users/test
// @Desc    Test users route
// @Access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

module.exports = router;
