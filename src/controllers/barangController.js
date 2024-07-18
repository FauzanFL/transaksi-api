const { Barang } = require('../models');

class BarangController {
  async getAllBarang(req, res) {
    try {
      const barang = await Barang.findAll({
        attributes: ['id', 'nama', 'kode', 'harga'],
      });
      res.status(200).json(barang);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BarangController;
