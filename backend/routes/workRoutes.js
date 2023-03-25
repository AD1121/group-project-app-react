const express = require('express')
const router = express.Router()
const {
  getWorkOrders,
  addWork,
  deleteWork
} = require('../controllers/workController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getWorkOrders).post(protect, addWork)
router.route('/:id').delete(protect, deleteWork)

module.exports = router
