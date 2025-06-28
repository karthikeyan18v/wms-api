const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Inventory routes
router.get('/', inventoryController.getInventory);
router.post('/', inventoryController.createInventory);

module.exports = router;
