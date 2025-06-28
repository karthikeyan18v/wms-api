const Inventory = require('../models/inventory');
const Product = require('../models/product');

// Get all inventory items
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Create a new inventory item (When adding stock)
exports.createInventory = async (req, res) => {
    const { name, sku, quantity, location } = req.body;
    try {
        const newInventory = new Inventory({
            name,
            sku,
            quantity,
            location,
            soldQuantity: 0, // Initially no products are sold
        });

        await newInventory.save();
        res.json(newInventory);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Update inventory when an order is placed
exports.updateInventoryOnOrder = async (orderItems) => {
    for (const item of orderItems) {
        const inventory = await Inventory.findOne({ sku: item.sku });
        if (inventory) {
            inventory.soldQuantity += item.quantity;
            inventory.remainingStock = inventory.quantity - inventory.soldQuantity;
            await inventory.save();
        }
    }
};
