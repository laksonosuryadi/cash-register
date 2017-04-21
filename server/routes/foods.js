var express = require('express');
var router = express.Router();
var Food = require('../controllers/foodController');

/* ADD FOOD */
router.post('/', Food.addFood);

/* SHOW FOODS */
router.get('/', Food.getFood);

/* DELETE FOOD */
router.delete('/:foodId', Food.deleteFood);

/* UPDATE FOOD */
router.put('/:foodId', Food.updateFood);

module.exports = router;
