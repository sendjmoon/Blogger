const BlogPostDaoMongoDBImpl = require('../daos/BlogPostDaoMongoDBImpl');
const UserDaoMongoDBImpl = require('../daos/UserDaoMongoDBImpl');

const BlogPostServiceImpl = require('./BlogPostServiceImpl');
const blogPostServiceImpl = BlogPostServiceImpl(BlogPostDaoMongoDBImpl());
const UserServiceImpl = require('./UserServiceImpl');
const userServiceImpl = UserServiceImpl(UserDaoMongoDBImpl());

module.exports = {
  blogPostService: blogPostServiceImpl,
  userService: userServiceImpl
};
