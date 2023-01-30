// import mongo client and ObjectId
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const userSchema = require("../models/userSchema");
const { z } = require("zod");

// import .env for mongo password
require("dotenv").config();

// define constant for database uri
const uri = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.qapvcjh.mongodb.net/?retryWrites=true&w=majority`;

// connect to database
const client = new MongoClient(uri);

// create reference to where items are stored in db
const itemsRef = client.db("items").collection("items");

// Params: item - JSON object
exports.insertItemIntoDB = async function insertItemIntoDB(user) {
	try {
		userSchema.parse(user);
	} catch (e) {
		return e;
	}
	// insert the user
	const response = await usersRef.insertOne(user);
	return response;
};

// Params: item_id - string
exports.findItemInDB = async function findItemInDB(item_id) {
	// find the item in DB
	let item = await itemsRef.findOne({ _id: ObjectId(item_id) });
	return item;
};

// Params: item_id - string, doc - JSON object
exports.updateItemInDB = async function updateItemInDB(item_id, doc) {
	// Overwrite the item in DB
	let response = await itemsRef.replaceOne({ _id: ObjectId(item_id) }, doc);
	return response;
};

// Params: item_id - string
exports.deleteItemFromDB = async function deleteItemFromDB(item_id) {
	// Delete item in DB
	let response = await itemsRef.deleteOne({ _id: ObjectId(item_id) });
	return response;
};
