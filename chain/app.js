const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

module.exports = app;
