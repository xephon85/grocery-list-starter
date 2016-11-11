const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel.js');
const items = {};


//get HOME page
router.get('/', (req, res, next) => {
  //mongoose! go find ItemModels
  //no specific attributes, find all
  ItemModel.find((err, items) => {
    //queries ran asynchronously
    //must make callback once quiries are finished
    res.render('index.ejs', {
      items: items
    });
    console.log(req.body)
  });
});

//Post-Create an item
router.post('/', (req, res, next) => {
  var item = new ItemModel({
    item : req.body.item,
    qty : req.body.qty
  });

  item.save((err, item) => {
    //inserts are ran asynchronously
    //pass in callback once inserts are finished
    res.redirect('/');
  });
  console.log(req.body)
});

module.exports = router;
