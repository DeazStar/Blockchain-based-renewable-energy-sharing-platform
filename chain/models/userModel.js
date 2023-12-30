// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  wallet: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  accountStatus: {
    type: String,
    default: 'active',
  },
  registeredDate: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.Model('User', userSchema);

module.exports = userModel;
