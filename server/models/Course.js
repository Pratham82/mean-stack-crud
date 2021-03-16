const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  percentComplete: {
    type: Number,
    required: false,
  },
  favorite: {
    type: Boolean,
    required: false,
  },
})

module.exports = mongoose.model('Course', courseSchema)
