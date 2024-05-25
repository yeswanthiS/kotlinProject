require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const vehicleRoutes = require('./Routes/vehicle');

const app = express();

app.use(bodyParser.json());

// Use the vehicle routes
app.use('/api/vehicle', vehicleRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_Name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Failed to connect to MongoDB Atlas', err);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});