const { Schema, model } = require('mongoose');
const replieSchema = require('./replies.js');
const formatDate = require('../utils/format.js');

// Schema to create user model
const postsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      max_length: 280,
    },
    text: {
      type: String,
      required: true,
      unique: true,
      max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => formatDate(timestamp),
      },
    username: {
        type: String,
      required: true,
    },
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Games'
  },
    replies: [replieSchema],
},

{
    toJSON: {
        virtuals:true,
      getters: true,
    },
  }
);

const Posts = model('Posts', postsSchema);

module.exports = Posts;

