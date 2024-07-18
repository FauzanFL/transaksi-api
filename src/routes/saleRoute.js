const express = require('express');
const SaleController = require('../controllers/saleController');

const router = express.Router();
const sale = new SaleController();

router.get('/', sale.getAllSale);
router.get('/search', sale.searchSale);
router.post('/create', sale.createSale);

module.exports = router;
