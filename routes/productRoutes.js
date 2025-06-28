const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product routes
router.get('/', productController.getProducts);
router.post('/', productController.createProduct);

module.exports = router;
