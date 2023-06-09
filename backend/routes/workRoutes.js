const express = require('express')
const router = express.Router()
const {
  getWorkOrders,
  addWork,
  deleteWork,
  getAllWorkOrders
} = require('../controllers/workController')

// Protecting the route and make sure that a user logged in with a token
const { protect } = require('../middleware/authMiddleware')

// Declaring API for controllers
router.route('/').get(protect, getWorkOrders).post(protect, addWork)
router.route('/:id').delete(protect, deleteWork)

router.route('/all').get(getAllWorkOrders)

module.exports = router
