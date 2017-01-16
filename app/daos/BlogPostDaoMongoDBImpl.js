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
          BlogPost.findById(createdPost.id)
            .select('-_id -__v')
            .populate('author', '-_id username email')
            .exec()
            .then((newPost) => {
              resolve(newPost.toObject());
            })
            .catch(reject);
        })
        .catch(reject);
    });
  };

  const getAllPosts = function() {
    return new Promise((resolve, reject) => {
      BlogPost.find({})
      .select('-__v')
      .populate('author', '-_id username email')
        .then(resolve)
        .catch(reject);
    });
  };

  const getById = function(id) {
    return new Promise((resolve, reject) => {
      BlogPost.findById(id)
        .select('-_id -__v')
        .populate('author', '-_id username email')
        .exec()
        .then((post) => {
          resolve(post ? post.toObject() : null);
        })
        .catch(reject);
    });
  };

  const getByPublicId = function(publicId) {
    return new Promise((resolve, reject) => {
      BlogPost.findOne({ publicId: publicId })
        .select('-_id -__v')
        .populate('author', '-_id username email')
        .exec()
        .then((post) => {
          resolve(post ? post.toObject() : null);
        })
        .catch(reject);
    });
  };

  const getByAuthorId = function(authorId) {
    return new Promise((resolve, reject) => {
      const AuthorObjectId = require('mongoose').Types.ObjectId;
      authorId = new AuthorObjectId(authorId);
      BlogPost.find({ author: authorId })
        .select('-_id -__v')
        .populate('author', '-_id username email')
        .exec()
        .then((posts) => {
          const postObjects = posts.map((post) => {
            return post.toObject();
          });

          resolve(postObjects);
        })
        .catch(reject);
    });
  };

  const updateByPublicId = function(publicId, title, content) {
    return new Promise((resolve, reject) => {
      BlogPost.findOneAndUpdate(
          { publicId: publicId },
          { title: title },
          { content: content }
        )
        .then((post) => {
          post.save((err) => {
            err ? reject(err) : resolve(post);
          });
        });
    });
  };

  return {
    create: create,
    getAllPosts: getAllPosts,
    getById: getById,
    getByPublicId: getByPublicId,
    getByAuthorId: getByAuthorId,
    updateByPublicId: updateByPublicId,
  };
};
