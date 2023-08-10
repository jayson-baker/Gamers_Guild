const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
 name: {
    type: String,
    required: true,
    trim: true
  },
 Image: {
  type: String,
  required: true,
  trim: true
 }
});

const Games = mongoose.model('Games', gameSchema);

module.exports = Games;
