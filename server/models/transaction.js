var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  food_list :[{
    quantity: Number,
    food: { type: Schema.Types.ObjectId, ref: 'Food' }
  }],
  total : Number
}, {
  timestamps: true
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
