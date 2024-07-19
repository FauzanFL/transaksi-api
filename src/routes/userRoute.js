const express = require('express');
const UserController = require('../controllers/userController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();
const user = new UserController();

router.post('/login', user.login);
router.get('/login', authenticateToken, user.isLogin);

module.exports = router;
