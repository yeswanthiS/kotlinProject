const { query } = require('express-validator');

const statusSchema = [
    query('vehicleNumber').notEmpty().withMessage('Vehicle Number is required')
];

module.exports = statusSchema;