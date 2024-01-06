const { exec } = require('child_process');
const axios = require('axios');
const Product = require('../models/productModel');

const postProduct = async (req, res, next) => {
  const { wallet } = req.user;
  const { energyAmount, price } = req.body;

  const product = await Product.create({
    energyAmount: Number(energyAmount),
    price,
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

  const command = `yarn hardhat --network localhost releaseFunds --txtid ${txtId}`;

  const response = await axios.post(`${process.env.NODEMCU_URL}/send`, {
    id: deviceId,
  });

  const data = JSON.parse(response.data);

  if (data === 'success') {
    exec(command, (error) => {
      if (error) {
        console.log(error);
        console.log("can't execute the command");
        res
          .status(500)
          .json({ status: 'error', message: "Can't execute command" });

        next();
      }
    });
    await Product.findByIdAndUpdate(txtId, {
      transactionState: 'sold',
      purchasedDate: Date.now(),
    });
    res.status(200).json({ status: 'success', message: 'Fund released' });
  } else {
    res
      .status(200)
      .json({ status: 'failure', message: 'Can not release funds' });
  }
};

module.exports = {
  postProduct,
  listProduct,
  releaseEnergy,
};
