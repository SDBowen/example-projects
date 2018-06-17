const express = require('express');
const router = express.Router();

// @Route   GET api/posts/test
// @Desc    Test post route
// @Access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts works' }));

module.exports = router;
