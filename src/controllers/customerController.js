const { Customer } = require('../models');

class CustomerController {
    async getAllCustomer(req, res) {
        try {
          const customer = await Customer.findAll({attributes: ['id', 'nama', 'kode', 'telp']});
          res.status(200).json(customer);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      } 
}

module.exports = CustomerController;