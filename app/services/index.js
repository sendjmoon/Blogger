const BlogPostDaoMongoDBImpl = require('../daos/BlogPostDaoMongoDBImpl');

const BlogPostServiceImpl = require('./BlogPostServiceImpl');
const blogPostServiceImpl = BlogPostServiceImpl(BlogPostDaoMongoDBImpl());

module.exports = {
  blogPostService: blogPostServiceImpl,
};
