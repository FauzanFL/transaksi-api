const { User } = require('../models');
const bcrypt = require('bcrypt');
const generateAccessToken = require('../utils/token');

class UserController {
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const token = generateAccessToken(username);

      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error);
    }
  }
}

module.exports = UserController;
