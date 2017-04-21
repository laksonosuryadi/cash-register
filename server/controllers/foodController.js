var Food = require('../models/food');

var addFood = function(req, res, next) {
  Food.create({
    name : req.body.name,
    img_url : req.body.img_url,
    price : req.body.price
  }, function(err, food) {
    if(err){
      res.send(err)
    } else {
      res.send(food)
    }
  });
}

var getFood = function(req, res, next) {
  Food.find(function(err, foods) {
    if(err) {
      res.send(err)
    } else {
      res.send(foods)
    }
  });
}

var deleteFood = function(req, res) {
  Food.findByIdAndRemove(req.params.foodId, function (err, food) {
    if(err){
      res.send('Deleting Food Failed')
    } else {
      res.send(`Food has been succesfully deleted from Database.`)
    }
  });
}

var updateFood = function(req, res) {
  Food.findOneAndUpdate(
    {
      _id : req.params.foodId
    },
    {
      name : req.body.name,
      img_url : req.body.img_url,
      price : req.body.price
    }, function(err, food) {
      if(err){
        res.send(err)
      } else {
        res.send(`Food info has been succesfully updated.`)
      }
    })
}

module.exports = {
  addFood,
  getFood,
  deleteFood,
  updateFood
}
