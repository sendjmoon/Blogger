const Promise = require('bluebird');
const BlogPost = require('../models/BlogPost');

module.exports = function() {
  const create = function(postData) {
    return new Promise((resolve, reject) => {
      const post = new BlogPost(postData);
      post.createdAt = Date.now();
      post.updatedAt = Date.now();

      post.save()
        .then((createdPost) => {
          createdPost
            .populate('author')
            .execPopulate()
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  }

  const getById = function(id) {
    return new Promise((resolve, reject) => {
      BlogPost.findById(id)
        .populate('author')
        .exec()
        .then(resolve)
        .catch(reject);
    })
  }

  const getByPublicId = function(publicId) {
    return new Promise((resolve, reject) => {
      BlogPost.findOne({ publicId: publicId })
        .populate('author')
        .exec()
        .then(resolve)
        .catch(reject);
    });
  }

  const getByAuthorId = function(authorId) {
    return new Promise((resolve, reject) => {
      BlogPost.find({ authorId: authorId })
        .populate('author')
        .exec()
        .then(resolve)
        .catch(reject);
    });
  }

  return {
    create: create,
    getById: getById,
    getByPublicId: getByPublicId,
    getByAuthorId: getByAuthorId,
  };
}
