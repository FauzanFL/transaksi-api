const express = require('express');
const CustomerController = require('../controllers/customerController');

const router = express.Router();
const customer = new CustomerController();

router.get('/', customer.getAllCustomer);

module.exports = router;
