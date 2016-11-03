const express = require('express');
const router = express.Router();
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

//Post-Create a tasks
router.post('/items', (req, res, next) => {
  var item = new ItemModel({
    text : req.body.text
  });

  item.save((err, item) => {
    //inserts are ran asynchronously
    //pass in callback once inserts are finished
    res.redirect('/');
  });
  console.log(req.body)
});
