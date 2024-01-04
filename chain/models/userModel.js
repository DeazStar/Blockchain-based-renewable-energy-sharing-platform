// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  wallet: {
    type: String,
    required: true,
  },
  deviceId: {
    type: String,
    required: true,
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

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
