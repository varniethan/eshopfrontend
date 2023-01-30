const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;
const { Schema } = mongoose;

const reviewSchema = new Schema({
  item_id: ObjectId,
  review_id: ObjectId,
  review_body: String,
  rating: Number,
  created_at: Date,
});

module.exports = reviewSchema;
