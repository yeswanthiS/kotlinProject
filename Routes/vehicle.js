const express = require('express');
const { validationResult } = require('express-validator');
const Vehicle = require('../Models/vehicle');
const registerSchema = require('../Schemas/registerSchema');
const statusSchema = require('../Schemas/statusSchema');

const router = express.Router();

// Register a new vehicle
router.post('/register', registerSchema, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get vehicle status
router.post('/status', statusSchema, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { vehicleNumber, chassisNumber } = req.body;
        const vehicle = await Vehicle.findOne({ vehicleNumber, chassisNumber });
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;