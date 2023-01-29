const mongoose = require("mongoose");
var ObjectId = require("mongodb").ObjectId;
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  email: String,
  DOB: Date,
  shop_id: ObjectId,
  profile_picture_url: String,
  created_at: Number
});

module.exports = userSchema;
