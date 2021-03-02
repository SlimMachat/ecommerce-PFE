const express = require('express');
const auth = require('../middlewares/auth');
const purchaseController = require('../controllers/purchaseController');
const { route } = require('./reviewRoutes');

const router = express.Router();

router.post('/checkout-session/:productId', auth, purchaseController.getCheckoutSession);

router.post('/createCheckout',purchaseController.createBookingCheckout);

module.exports = router