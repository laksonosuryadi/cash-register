var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: String,
  img_url: String,
  price: Number  
});

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;
