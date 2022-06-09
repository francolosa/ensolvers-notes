var express = require('express');
var router = express.Router();
const itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', itemController.list);

module.exports = router;
