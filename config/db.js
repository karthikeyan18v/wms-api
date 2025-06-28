const mongoose = require('mongoose');
require('dotenv').config();  // Make sure this line is at the top

const connectDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGO_URI);  // Debugging line to check if URI is loaded correctly

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
