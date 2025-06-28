const Order = require('../models/order');
const Product = require('../models/product');
const Inventory = require('../models/inventory');
const inventoryController = require('./inventoryController');

// Create a new order and update inventory
exports.createOrder = async (req, res) => {
    const { customer, items, status } = req.body;

    try {
        const orderItems = [];

        for (const item of items) {
            const product = await Product.findOne({ sku: item.sku });
            if (product) {
                const total = product.price * item.quantity;
                orderItems.push({
                    product: product._id,
                    quantity: item.quantity,
                    total: total,
                });

                // Update the product stock in the inventory
                const inventoryItem = await Inventory.findOne({ sku: item.sku });
                if (inventoryItem && inventoryItem.remainingStock >= item.quantity) {
                    inventoryItem.soldQuantity += item.quantity;
                    inventoryItem.remainingStock = inventoryItem.quantity - inventoryItem.soldQuantity;
                    await inventoryItem.save();
                } else {
                    return res.status(400).json({ msg: 'Not enough stock for product ' + product.name });
                }
            } else {
                return res.status(400).json({ msg: 'Product not found' });
            }
        }

        const newOrder = new Order({
            customer,
            items: orderItems,
            status,
        });

        await newOrder.save();
        res.json(newOrder);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
