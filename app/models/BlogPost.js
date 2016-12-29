const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  publicId: String,
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  createdAt: Number,
  updatedAt: Number,
},
{
  collection: 'blogPosts',
});

BlogPostSchema.index({ publicId: 1 });
BlogPostSchema.index({ author: 1, createdAt: -1 });

module.exports = mongoose.model('BlogPost', BlogPostSchema);
