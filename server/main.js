// Import MongoClient, express
const express = require("express");
var cors = require("cors");

// start express instance
const app = express();
const bp = require("body-parser");
// add items routes
// app.use("/", require("./routes/items"));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
// import items functions
const itemsFunctions = require("./database/items");

// extract all items functions
const findItemInDB = itemsFunctions.findItemInDB;
const insertItemIntoDB = itemsFunctions.insertItemIntoDB;
const updateItemInDB = itemsFunctions.updateItemInDB;
const deleteItemFromDB = itemsFunctions.deleteItemFromDB;
require("dotenv").config();

// configuring express to use body-parser as middle-ware
// for passing json data for post requests
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.post("/post/item", async (req, res) => {
	console.log("request body: ", req.body);
	let response = await insertItemIntoDB(req.body);
	console.log(response)
	res.send(response);
});

// app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5500"
// }));
// start express server
app.listen(process.env.PORT, function () {
	console.log(`Example app listening on port ${process.env.PORT}!`);
});
