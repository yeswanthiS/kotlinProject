require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const vehicleRoutes = require('./Routes/vehicle');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI + '/' + process.env.DB_Name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Failed to connect to MongoDB Atlas', err);
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/vehicle', vehicleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});