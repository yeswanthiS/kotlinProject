const { check } = require('express-validator');

const registerSchema = [
    check('vehicleNumber').notEmpty().withMessage('Vehicle Number is required'),
    check('chassisNumber').notEmpty().withMessage('Chassis Number is required'),
    check('aadharNumber').notEmpty().withMessage('Aadhar Number is required'),
    check('name').notEmpty().withMessage('Name is required'),
    check('mobileNumber').notEmpty().withMessage('Mobile Number is required'),
    check('healthCondition').notEmpty().withMessage('Health Condition is required')
];

module.exports = registerSchema;