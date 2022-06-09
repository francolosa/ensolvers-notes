var express = require('express');
var router = express.Router();
const cors = require("cors")
const bodyParser = require('body-parser')
const usersAPIController = require('../../controllers/api/usersController');
const jsonParser = bodyParser.json();
const config = {
    origin: true,
    methods: ["POST"],
    credentials: true,
    maxAge: 3600
}

router.post('/logIn', cors(config), usersAPIController.logIn);

module.exports = router;