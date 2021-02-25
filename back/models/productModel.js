const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name']
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price']
    },
    category: {
      type: String,
      enum: {
        values: ['Adidas', 'Nike', 'Lacoste', 'Reebok'],
        message: 'Category must be one of these four:Adidas, Nike, Lacoste, or Reebok'
      }
    },
    summary: {
      type: String
    },
    featured: Boolean,
    description: {
      type: String
    },
    stock: [
      {
        size: String,
        qty: Number,
        color: String
      }
    ],
    ratingsAverage: {
      type: Number,
      default: 0,
      min: [0, 'Rating must be greater than 0'],
      max: [5, 'Rating must be less than 5'],
      set: val => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    imageCover: {
      type: String
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// FIXME: doesn't work
// VIRTUALLY POPULATE REVIEWS
/*productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id'
});*/

const Product = mongoose.model('Product', productSchema);

module.exports = Product;