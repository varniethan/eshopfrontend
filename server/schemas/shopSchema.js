const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;
const { Schema } = mongoose;

const shopSchema = new Schema({
  shop_id: ObjectId,
  description: String,
  special_offers: Array,
  created_at: Date
});

module.exports = shopSchema;
