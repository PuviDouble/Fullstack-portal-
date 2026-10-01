const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price1: Number,
  price2: Number,
  price3: Number
});

module.exports = mongoose.model("Product", productSchema);