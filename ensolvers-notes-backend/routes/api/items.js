var express = require('express');
var router = express.Router();
const cors = require("cors")
const bodyParser = require('body-parser')
const itemsAPIController = require('../../controllers/api/itemsController');
const jsonParser = bodyParser.json();
const configPost = {
    origin: true,
    methods: ["POST"],
    credentials: true,
    maxAge: 3600
}
const configPut = {
    origin: true,
    methods: ["PUT"],
    credentials: true,
    maxAge: 3600
}
const configDel = {
    origin: true,
    methods: ["POST"],
    credentials: true,
    maxAge: 3600
}
router.get('/', cors(), itemsAPIController.list);
router.post('/create', cors(configPost), itemsAPIController.create);
router.put('/edit', cors(configPut), itemsAPIController.edit);
router.put('/archive', cors(configPut), itemsAPIController.archive);
router.delete('/delete', cors(configDel), itemsAPIController.delete);

module.exports = router;