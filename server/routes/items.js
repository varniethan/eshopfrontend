// import server
var express = require("express");

// define router
var router = express.Router();

// import items functions
const itemsFunctions = require("../database/items");

// extract all items functions
const findItemInDB = itemsFunctions.findItemInDB;
const insertItemIntoDB = itemsFunctions.insertItemIntoDB;
const updateItemInDB = itemsFunctions.updateItemInDB;
const deleteItemFromDB = itemsFunctions.deleteItemFromDB;

// get an item
router.get("/get/item/:item_id", async (req, res) => {
  let response = await findItemInDB(req.params.item_id);
  res.json(response);
});

// add a new item
router.post("/post/item", async (req, res) => {
  let response = await insertItemIntoDB(req.body);
  res.send(response);
});

// update an item
router.post("/update/item/:item_id", async (req, res) => {
  let response = await updateItemInDB(req.params.item_id, req.body);
  res.send(response);
});

// delete an item
router.delete("/delete/item/:item_id", async (req, res) => {
  let response = await deleteItemFromDB(req.params.item_id);
  res.send(response);
});

// export router
module.exports.router = router;