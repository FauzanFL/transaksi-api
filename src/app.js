const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/../.env' });
const { CLIENT_URL } = process.env;
const authenticateToken = require('./middleware/auth');

const userRoute = require('./routes/userRoute');
const customerRoute = require('./routes/customerRoute');
const barangRoute = require('./routes/barangRoute');
const saleRoute = require('./routes/saleRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
);

app.use('/users', userRoute);
app.use('/customers', authenticateToken, customerRoute);
app.use('/barangs', authenticateToken, barangRoute);
app.use('/sales', authenticateToken, saleRoute);

app.get('/', (req, res) => {
  res.send('Welcome to transaki api!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
