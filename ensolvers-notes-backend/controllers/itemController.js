let db = require("../database/models")
const Items = require('../database/models/Items')

const itemController = {
    list: function(req, res, next) {
        db.Items.findAll()
        .then((items)=>{
          res.send("items: "+items)
        });
      }
}

module.exports = itemController;