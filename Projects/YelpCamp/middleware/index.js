var Campground = require('../models/campground');
var Comment = require('../models/comment');
var middlewareObj = {};

middlewareObj.checkCampgroundOwner = function(req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, selectedCampground) {
      if (err) {
        req.flash('error', 'This campground was not found in the database :(');
        res.redirect('back');
      } else {
        if (selectedCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You don"t have permission to do that.');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You need to be logged in to do that.');
    res.redirect('back');
  }
};

middlewareObj.checkCommentOwner = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, selectedComment) {
      if (err) {
        res.redirect('back');
      } else {
        if (selectedComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You don"t have permission to do that!');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You need to be logged in to do that.');
    res.redirect('back');
  }
};

// Check if user is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You need to be logged in to do that.');
  res.redirect('/login');
};

module.exports = middlewareObj;
