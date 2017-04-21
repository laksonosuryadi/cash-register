var express = require('express');
var router = express.Router();
var Transaction = require('../controllers/transactionController');

/* ADD FOOD */
router.post('/', Transaction.addTransaction);

/* SHOW FOODS */
router.get('/', Transaction.getTransaction);


module.exports = router;
