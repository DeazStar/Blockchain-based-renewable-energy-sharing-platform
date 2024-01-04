const express = require('express');
const { login, authRoute, signup } = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);

router.use(authRoute);

module.exports = router;
