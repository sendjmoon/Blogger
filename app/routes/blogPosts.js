const express = require('express');
const router = express.Router();

const blogPostService = require('../services').blogPostService;

router.get('/all', function(req, res) {
  blogPostService.getAllPosts()
    .then((allPosts) => {
      allPosts ? res.json(allPosts) : res.status(404).json({
        error: 'No posts found'
      });
    });
});

router.get('/:publicId', function(req, res) {
  blogPostService.getByPublicId(req.params.publicId)
    .then((post) => {
      if (!post) {
        res.status(404).json({
          error: `No post found with id ${req.params.publicId}`
        });
      } else {
        res.json(post);
      }
    });
});

router.get('/author/:authorId', function(req, res) {
  blogPostService.getByAuthorId(req.params.authorId)
    .then((postsObject) => {
      postsObject ? res.json(postsObject) : res.status(404).json({
        error: `No posts found by id ${req.params.authorId}`
      });
    });
});

router.post('/', function(req, res) {
  const postData = {};
  postData.authorId = req.session.user._id;
  postData.title = req.body.title;
  postData.content = req.body.content;

  blogPostService.create(
      postData.authorId,
      postData.title,
      postData.content
    )
    .then((post) => {
      if (!post) {
        res.status(404).json({
          error: 'Error encountered creating post'
        });
      } else {
        res.json(post);
      }
    });
});

module.exports = router;
