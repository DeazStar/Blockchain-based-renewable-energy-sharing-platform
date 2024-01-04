const Product = require('../models/productModel');

const postProduct = async (req, res, next) => {
  const { wallet } = req.user;
  const { energyAmount } = req.body;

  const product = await Product.create({
    energyAmount: Number(energyAmount),
    userWallet: wallet,
  });

  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
};

const listProduct = async (req, res, next) => {
  const product = await Product.find();

  res.status(201).json({
    status: 'success',
    resultLength: product.length,
    data: {
      product,
    },
  });
};

module.exports = {
  postProduct,
  listProduct,
};
