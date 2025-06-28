const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Order routes
router.post('/', orderController.createOrder);

module.exports = router;
