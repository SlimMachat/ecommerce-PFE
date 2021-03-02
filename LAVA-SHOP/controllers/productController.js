const APIFeatures = require("../middlewares/apiFeatures");
const Product = require("../models/productModel")

// FETCH ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    let filter = {};
    if (req.params.productId) filter = { product: req.params.productId };

    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const products = await features.query;
    
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

// FETCH ONE PRODUCT
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.log(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Product not found' });
    }
    res.status(500).send('Server Error');
  }
}