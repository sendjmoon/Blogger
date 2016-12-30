const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  publicId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: String,
  createdAt: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Number,
    required: true,
  },
},
{
  collection: 'blogPosts',
});

BlogPostSchema.index({ publicId: 1 });
BlogPostSchema.index({ author: 1, createdAt: -1 });

module.exports = mongoose.model('BlogPost', BlogPostSchema);
