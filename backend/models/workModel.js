const mongoose = require('mongoose')

const workSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    worker: {
      type: String,
      required: true
    },
    calendar: {
      type: Date,
      required: true
    },
    timeForWork: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Work', workSchema)
