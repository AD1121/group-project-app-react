const mongoose = require('mongoose')

const workSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    cleanerName: {
      type: String,
      required: true
    },
    calendar: {
      type: Date,
      required: true
    },
    hours: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Work', workSchema)
