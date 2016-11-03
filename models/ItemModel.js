const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  'item': String,
  'qty': Number
});

module.exports = mongoose.model('Item', ItemSchema);
