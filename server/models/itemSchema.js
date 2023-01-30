const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;
const { Schema } = mongoose;

const itemSchema = new Schema({
  item_id: ObjectId,
  shop_id: ObjectId,
  description: String,
  price: Number,
  average_rating: Number,
  created_at: Date
});

module.exports = itemSchema;
