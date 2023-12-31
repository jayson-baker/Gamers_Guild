const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/format.js');

// Schema to create Student model
const replieSchema = new Schema(
  {
    id: {
        type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    text: {
        type: String,
        required: true,
        max_length: 280,
      },
      createdAt: {
          type: Date,
          default: Date.now,
          get: timestamp => formatDate(timestamp)
        },
      username: {
          type: String,
        required: true,
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id:false
  }
);



module.exports = replieSchema;