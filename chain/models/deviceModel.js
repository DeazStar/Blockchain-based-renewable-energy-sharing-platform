const mongoose = require('mongoose');

const deviceScheme = mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
  },
});

const deviceModel = mongoose.model('Device', deviceScheme);

module.exports = deviceModel;
