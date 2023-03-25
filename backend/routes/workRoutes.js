const express = require('express')
const router = express.Router()
const {
  getWorks,
  addWork,
  deleteWork
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal)

module.exports = router
