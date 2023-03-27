const asyncHandler = require('express-async-handler')

const Work = require('../models/workModel')
// const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getWorkOrders = asyncHandler(async (req, res) => {
  const works = await Work.find({ user: req.user.id })

  res.status(200).json(works)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const addWork = asyncHandler(async (req, res) => {
  if (
    !req.body.cleanerName &&
    !req.body.calendar &&
    !req.body.hours &&
    !req.body.level
  ) {
    res.status(400)
    throw new Error('Please add a all fields')
  }

  const work = await Work.create({
    cleanerName: req.body.cleanerName,
    calendar: req.body.calendar,
    hours: req.body.hours,
    level: req.body.level,
    user: req.user.id
  })

  res.status(200).json(work)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.params.id)

  if (!work) {
    res.status(400)
    throw new Error('Work not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (work.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await work.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getWorkOrders,
  addWork,
  deleteWork
}
