const mongoose = require('mongoose');

const standSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }, 
},
{ timestamps: true });

module.exports = mongoose.model('Stand', standSchema);