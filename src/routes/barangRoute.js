const express = require('express');
const BarangController = require('../controllers/barangController');

const router = express.Router();
const barang = new BarangController();

router.get('/', barang.getAllBarang);

module.exports = router;
