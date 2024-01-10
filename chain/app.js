const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

module.exports = app;
