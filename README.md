# wms-api
Setup
Clone the repository.

# Install dependencies:
bash
npm init -y
npm install dotenv  express mongoose body-parser

# Run the application:
bash
node app.js
Open your browser or Postman to test the API.

# Warehouse Management System (WMS) API
A simple API for managing products, inventory, and orders in a warehouse system. This API allows you to add products, manage inventory, and place orders.

# Features
Manage Products: Add and view products in the system.

Manage Inventory: Track inventory items with quantity and location.

Place Orders: Create orders, update stock, and manage customer orders.

# API Endpoints
Products
POST /api/products: Add a new product.

GET /api/products: View all products.

Inventory
POST /api/inventory: Add inventory items.

GET /api/inventory: View inventory details.

Orders
POST /api/orders: Place a new order.

GET /api/orders: View all orders.


# How to Test
Using Postman
1.Add Product: POST to /api/products with a JSON body:{ "name": "Smartphone", "sku": "SMART123", "price": 500, "stock": 100 }
2.Add Inventory: POST to /api/inventory with a JSON body:{ "name": "Widget A", "sku": "WIDGET-A", "quantity": 100, "location": "Aisle 3" }
3.Place Order: POST to /api/orders with a JSON body:{ "customer": "John Doe", "items": [{ "sku": "WIDGET-A", "quantity": 5 }], "status": "pending" }
