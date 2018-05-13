var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
var middleware = require('../middleware');

// Get all campgrounds
router.get('/', function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/index', {
        campgrounds: allCampgrounds,
        currentUser: req.user
      });
    }
  });
});

// Add new campground to DB
router.post('/', middleware.isLoggedIn, function(req, res) {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {
    name: name,
    price: price,
    image: image,
    description: desc,
    author: author
  };
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});

// Submit new campground
router.get('/new', middleware.isLoggedIn, function(req, res) {
  res.render('campgrounds/new');
});

// Display campground
router.get('/:id', function(req, res) {
  Campground.findById(req.params.id)
    .populate('comments')
    .exec(function(err, foundCampground) {
      if (err) {
        console.log(err);
      } else {
        res.render('campgrounds/show', { campground: foundCampground });
      }
    });
});

// Edit campground
router.get('/:id/edit', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findById(req.params.id, function(err, selectedCampground) {
    res.render('campgrounds/edit', { campground: selectedCampground });
  });
});

// Update campground
router.put('/:id', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(
    err,
    updatedCampground
  ) {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      res.redirect('/campgrounds/' + req.params.id);
    }
  });
});

// Destroy campground
router.delete('/:id', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      res.redirect('/campgrounds');
    }
  });
});


module.exports = router;
