const Promise = require('bluebird');
const utils = require('../utils');

module.exports = function(blogPostDao) {
  if (blogPostDao === undefined || blogPostDao === null) {
    throw new Error('BlogPostDao is required');
  }

  const _blogPostDao = blogPostDao;

  const create = function(authorId, title, content) {
    const post = {};
    post.author = authorId;
    post.title = title;
    post.content = content;
    post.publicId = `${utils.generateHash(4)}-${title.toLowerCase().split(' ').join('-')}`;

    return _blogPostDao.create(post);
  };

  const getAllPosts = function() {
    return _blogPostDao.getAllPosts();
  };

  const getById = function(id) {
    return _blogPostDao.getById(id);
  };

  const getByPublicId = function(publicId) {
    return _blogPostDao.getByPublicId(publicId);
  };

  const getByAuthorId = function(authorId) {
    return _blogPostDao.getByAuthorId(authorId);
  };

  return {
    create: create,
    getAllPosts: getAllPosts,
    getById: getById,
    getByPublicId: getByPublicId,
    getByAuthorId: getByAuthorId,
  };
};
