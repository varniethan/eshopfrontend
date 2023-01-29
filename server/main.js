// Import MongoClient, express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// start express instance
const app = express();

// add items routes
app.use("/", require("./routes/items").router);

// import all schemas
const userSchema = require("./schemas/userSchema");
const shopSchema = require("./schemas/shopSchema");
const itemSchema = require("./schemas/itemSchema");
const reviewSchema = require("./schemas/reviewSchema");

// create models with the schemas
const User = mongoose.model("User", userSchema);
const Shop = mongoose.model("Shop", shopSchema);
const Item = mongoose.model("Item", itemSchema);
const Review = mongoose.model("Review", reviewSchema);

// const valid = new_user.validate((e) => {
//   if (e) {
//     console.log(e);
//   } else {
//     console.log("success");
//   }
// });

require("dotenv").config();

// configuring express to use body-parser as middle-ware
// for passing json data for post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// start express server
app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
