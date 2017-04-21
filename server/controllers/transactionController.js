var Transaction = require('../models/transaction')

var addTransaction = function(req, res) {
  Transaction.create({
    food_list: req.body.food_list,
    total: req.body.total
  }, function(err, transaction) {
    if(err){
      res.send(err)
    } else {
      res.send(transaction)
    }
  })
}

var getTransaction = function(req, res, next) {
  Transaction.find()
    .populate('food_list food_list.food')
    .exec(function(err, transactions) {
    if(err) {
      res.send(err)
    } else {
      res.send(transactions)
    }
  })
}

module.exports = {
  addTransaction,
  getTransaction
}
