const stripe = require('stripe')
const Product = require("../models/productModel");
const Purchase = require('../models/purchaseModel');

exports.getCheckoutSession = async (req, res) => {
  try {
    console.log(req.params.productId);
    const product = await Product.findById(req.params.productId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get('host')}/`,
      cancel_url: `${req.protocol}://${req.get('host')}/`,
      customer_email: req.user.email,
      line_items: [
        {
          name: `${product.name}`,
          description: product.summary,
          images: [``],
          amount: product.price * 100,
          currency: 'cad',
          quantity: 1
        }
      ]
    })
    res.status(200).json(session);

  } catch (err) {
    console.log(err)
  }
}

exports.createBookingCheckout = async (req, res, next) => {
  console.log(req.body)
  const { product, user, price } = req.body;
  console.log(req.body)
  if (!product && !user && !price) return next();
  await Purchase.create({ product, user, price }).then((result)=>{
    if (result.createdAt!=undefined){
      res.json({status:200,data:result,error:false})
    }else{
      res.json({status:500,data:{},error:true})
    }
  });

 
}