const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, sku, price, stock } = req.body;
    try {
        const newProduct = new Product({
            name,
            sku,
            price,
            stock
        });

        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
