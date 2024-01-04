const express = require('express');
const {
  postProduct,
  listProduct,
} = require('../controllers/productController');
const { authRoute } = require('../controllers/authController');

const router = express.Router();

router.use(authRoute);
router.route('/').get(listProduct).post(postProduct);

module.exports = router;
