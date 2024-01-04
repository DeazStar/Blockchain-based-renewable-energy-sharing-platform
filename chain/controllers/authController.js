const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Device = require('../models/deviceModel');
const AppError = require('../errors/AppError');
const catchAsync = require('../errors/catchAsync');

const sendToken = async (res, data) => {
  const token = await jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.cookie('auth', token, {
    signed: true,
    httpOnly: true,
    expires: new Date(Date.now() + 86400000),
  });
};

const signup = catchAsync(async (req, res, next) => {
  const { wallet, deviceId } = req.body;

  const device = await Device.findOne({ deviceId });

  if (!device) throw new AppError(404, 'device not found');

  const user = await User.create({ wallet, deviceId });

  await sendToken(res, { data: user._id });

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const login = catchAsync(async (req, res, next) => {
  const { wallet } = req.body;

  const user = await User.findOne({ wallet });

  if (!user) {
    throw new AppError(401, 'Unauthorized access');
  }

  await sendToken(res, { data: user._id });

  res.status(200).json({ status: 'success', message: 'success' });
});

const authRoute = catchAsync(async (req, res, next) => {
  const { auth } = req.signedCookies;

  const { data } = await jwt.verify(auth, process.env.JWT_SECRET);

  const user = await User.findById(data);

  if (!user) {
    throw new AppError(404, 'Token invalid');
  }

  req.user = user;

  next();
});

module.exports = {
  login,
  authRoute,
  signup,
};
