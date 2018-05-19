var express = require('express');
var router = express.Router({ mergeParams: true });
var Campground = require('../models/campground');
var Comment = require('../models/comment');
var middleware = require('../middleware');

// Handle new comment
router.get('/new', middleware.isLoggedIn, function(req, res) {
  // Find campground by ID
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.render('comments/new', { campground: campground });
    }
  });
});

// Handle create comment
router.post('/', middleware.isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          campground.comments.push(comment);
          campground.save();
          req.flash('success', 'Your comment has been added.');
          res.redirect('/campgrounds/' + campground._id);
        }
      });
    }
  });
});

// Handle comment edit
router.get('/:comment_id/edit', middleware.checkCommentOwner, function(
  req,
  res
) {
  Comment.findById(req.params.comment_id, function(err, selectedComment) {
    if (err) {
      res.redirect('back');
    } else {
      res.render('comments/edit', {
        campground_id: req.params.id,
        comment: selectedComment
      });
    }
  });
});

// Handle update comment
router.put('/:comment_id', middleware.checkCommentOwner, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(
    err,
    updatedComment
  ) {
    if (err) {
      res.redirect('back');
    } else {
      res.redirect('/campgrounds/' + req.params.id);
    }
  });
});

// Handle comment destroy
router.delete('/:comment_id', middleware.checkCommentOwner, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if (err) {
      res.redirect('backS');
    } else {
      req.flash('success', 'You"r comment has been deleted');
      res.redirect('/campgrounds/' + req.params.id);
    }
  });
});

module.exports = router;
