const mongoose = require('mongoose');
const vehicleSchema = new mongoose.Schema({
    vehicleNumber: { type: String, required: true },
    chassisNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    healthCondition: { type: String, required: true } // Add health condition field
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;