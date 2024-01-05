const express = require('express');
const {
  postProduct,
  listProduct,
  releaseEnergy,
} = require('../controllers/productController');
const { authRoute } = require('../controllers/authController');

const router = express.Router();

router.use(authRoute);
router.route('/').get(listProduct).post(postProduct);
router.route('/release').post(releaseEnergy);

module.exports = router;
