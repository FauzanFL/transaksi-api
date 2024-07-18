const express = require('express');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config({ path: __dirname + '/../.env' });
const { SESSION_SECRET, CLIENT_URL } = process.env;

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.send('Welcome to transaki api!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
