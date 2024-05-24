const { check } = require('express-validator');

const statusSchema = [
    check('vehicleNumber').notEmpty().withMessage('Vehicle Number is required'),
    check('chassisNumber').notEmpty().withMessage('Chassis Number is required')
];

module.exports = statusSchema;