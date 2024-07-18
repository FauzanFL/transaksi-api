const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const user = new UserController();

router.post('/login', user.login);

module.exports = router;
