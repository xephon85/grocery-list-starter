const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/task-list/items');

// requiring path module
const path = require('path');

// route
const items = require('./routes/items');

//initialize our app
const app = express();

// set our view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//add our middleware
app.use(bodyParser.urlencoded({ extended:false }));

//require ItemModel
const ItemModel = require('./models/ItemModel.js');

// set our routes
app.use('/items', items);
app.use('/*', function(req, res, next) {
  res.redirect('/items');
});

const port = 3001
app.listen(port, () => console.log(`Server listening on: ${port}`));
