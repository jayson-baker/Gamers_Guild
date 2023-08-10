const { Schema, model } = require('mongoose');
const replySchema = require('./replys.js');
const formatDate = require('../util/format.js');

// Schema to create user model
const postsSchema = new Schema(
  {
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
    game: [{
      type: Schema.Types.ObjectId,
      ref: 'Games'
  }],
    replys: [replySchema],
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

