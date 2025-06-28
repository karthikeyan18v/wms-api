const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    soldQuantity: {
        type: Number,
        default: 0,
    },
    remainingStock: {
        type: Number,
        default: function() {
            return this.quantity - this.soldQuantity;
        }
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);
