var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');

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
router.post('/', isLoggedIn, function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {
    name: name,
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
router.get('/new', isLoggedIn, function(req, res) {
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
router.get('/:id/edit', checkCampgroundOwner, function(req, res) {
  Campground.findById(req.params.id, function(err, selectedCampground) {
    res.render('campgrounds/edit', { campground: selectedCampground });
  });
});

// Update campground
router.put('/:id', checkCampgroundOwner, function(req, res) {
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
router.delete('/:id', checkCampgroundOwner, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      res.redirect('/campgrounds');
    }
  });
});

// Check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkCampgroundOwner(req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, selectedCampground) {
      if (err) {
        res.redirect('back');
      } else {
        if (selectedCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          res.redirect('back');
        }
      }
    });
  } else {
    res.redirect('back');
  }
}

module.exports = router;
