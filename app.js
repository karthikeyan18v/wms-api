const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`);
});
