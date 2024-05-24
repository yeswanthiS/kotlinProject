const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicleNumber: { type: String, required: true },
    chassisNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);