import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    brand: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  display: {
    type: [String],
    required: true
  },
  processor: {
    type: String,
    required: true
  },
  storage: {
    type: [String],
    required: true
  },
  ram: {
    type: [String],
    required: true
  },
  rearCamera: {
    type: [String],
    required: true
  },
  frontCamera: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rankpoint:{
      type:Number,
      required:true
      }
});
const products = mongoose.models.Product  || mongoose.model('Product', productsSchema);

module.exports = products;
