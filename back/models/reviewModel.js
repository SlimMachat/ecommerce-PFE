const mongoose = require('mongoose');
const Product = require('./productModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review cannot be empty']
    },
    rating: {
      type: Number,
      required: [true, 'Review must have a rating'],
      min: 1,
      max: 5
    },
    title: {
      type:String,
      required: [true, 'Title cannot be empty']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    likes:[
      {
        user:{
          type: mongoose.Schema.ObjectId,
          ref:'User'
        }
      }
    ],
    unlikes:[
      {
        user:{
          type: mongoose.Schema.ObjectId,
          ref:'User'
        }
      }
    ],
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Review must belong to a product']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

// POPULATE USER
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name'
  });
  next()
});

// CALCULATE RATINGS AVERAGE
reviewSchema.statics.calcAverageRatings = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { product: productId }
    },
    {
      $group: {
        _id: '$product',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);
  // IF REVIEW FOUND, ADDED IT PRODUCT DB
  if (stats.length > 0) {
    await Product.findByIdAndUpdate(productId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      ratingsQuantity: 0,
      ratingsAverage: 0
    })
  }
}
// ADD ABOVE FUNCTION TO REVIEW SCHEMA?
reviewSchema.post('save', function () {
  this.constructor.calcAverageRatings(this.product);
});

reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;