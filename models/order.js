const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        }
    }],
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'shipped', 'delivered'],
    }
});

module.exports = mongoose.model('Order', OrderSchema);
