// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  energyAmount: {
    type: Number,
    required: true,
  },
  userWallet: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now(),
  },
  transactionState: {
    type: String,
    required: true,
    enum: ['notSold', 'sold'],
    default: 'notSold',
  },
  purchasedDate: {
    type: Date,
  },
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
