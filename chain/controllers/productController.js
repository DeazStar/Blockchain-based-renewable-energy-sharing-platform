const axios = require('axios');
const Product = require('../models/productModel');
const releaseFunds = require('../scripts/relaseFunds');

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

const releaseEnergy = async (req, res, next) => {
  const { deviceId, txtId } = req.body;

  const response = await axios.post(`${process.env.NODEMCU_URL}/send`, {
    id: deviceId,
  });

  const data = JSON.parse(response.data);

  if (data === 'success') {
    await releaseFunds(txtId);
    await Product.findByIdAndUpdate(txtId, {
      transactionState: 'sold',
      purchasedDate: Date.now(),
    });
    res.status(200).json({ status: 'success', message: 'Fund released' });
  }

  res.status(200).json({ status: 'failure', message: 'Can not release funds' });
};

module.exports = {
  postProduct,
  listProduct,
  releaseEnergy,
};
