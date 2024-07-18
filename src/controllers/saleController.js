const { Op } = require('sequelize');
const { Sale, Customer, SaleItem, Barang } = require('../models');

const formatTgl = (tgl) => {
  const tglObj = new Date(tgl);
  const hari = tglObj.getDate();
  const bulanIndex = tglObj.getMonth();
  const bulan = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'agu',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ][bulanIndex];
  const tahun = tglObj.getFullYear();
  return `${hari}-${bulan}-${tahun}`.toLowerCase();
};

class SaleController {
  async getAllSale(req, res) {
    try {
      const sale = await Sale.findAll({
        attributes: [
          'id',
          'kode',
          'tgl',
          'subtotal',
          'diskon',
          'ongkir',
          'total_bayar',
        ],
        include: [
          {
            model: Customer,
            as: 'customer',
            attributes: ['id', 'nama', 'kode', 'telp'],
          },
          {
            model: SaleItem,
            as: 'items',
            attributes: [
              'id',
              'harga_bandrol',
              'qty',
              'diskon_nilai',
              'harga_diskon',
              'total',
            ],
            include: {
              model: Barang,
              as: 'barang',
              attributes: ['id', 'nama', 'kode', 'harga'],
            },
          },
        ],
      });
      res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async searchSale(req, res) {
    const { keyword } = req.query;
    try {
      const sales = await Sale.findAll({
        include: [
          {
            model: Customer,
            as: 'customer',
            attributes: ['id', 'nama', 'kode', 'telp'],
          },
          {
            model: SaleItem,
            as: 'items',
            include: {
              model: Barang,
              as: 'barang',
              attributes: ['id', 'nama', 'kode', 'harga'],
            },
          },
        ],
      });

      const filterSales = sales.filter(
        (sale) =>
          sale.customer.nama.includes(keyword) ||
          sale.kode.toLowerCase().includes(keyword.toLowerCase()) ||
          formatTgl(sale.tgl).includes(keyword.toLowerCase())
      );

      res.status(200).json(filterSales);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createSale(req, res) {
    const { kode, tgl, cust_id, subtotal, diskon, ongkir, total_bayar, items } =
      req.body;

    try {
      const saleCheck = await Sale.findOne({ where: { kode: kode } });
      if (saleCheck) {
        return res.status(400).send({ message: 'Kode has been taken' });
      }

      if (!Array.isArray(items)) {
        return res.status(400).send({ message: 'Invalid items type' });
      }

      const saleData = {
        kode,
        tgl,
        cust_id,
        subtotal,
        diskon,
        ongkir,
        total_bayar,
      };

      const sale = await Sale.create(saleData);

      const saleItems = items.map((item) => {
        return { sales_id: sale.id, ...item };
      });

      await SaleItem.bulkCreate(saleItems);

      res.status(201).json({ message: 'Sales create successful' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = SaleController;
