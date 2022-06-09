let db = require("../../database/models")
const Items = require('../../database/models/Items')

const itemApiController = {
    list: (req, res) => {
        db.Items.findAll()
        .then((items) => {
          for (let i = 0; i < items.length; i++) {
              items[i].setDataValue("endPoint", "/api/items" + items[i].item_id)
          }
          let response = {
            meta: {
              status: 200,
              total: items.length,
              url: "api/users"
            },
            data: items
          }
          res.json(response)
        });
      },
      create: (req, res) => {
        db.Items.create({
          name: req.body.name,
          content: req.body.content,
        })
        res.json("status: 200")
      },
      edit: (req, res) => {
        db.Items.update(
          { name: req.body.name, content: req.body.content },
          { where: { item_id: req.body.id } })
          res.json("status: 200")
      },
      delete: (req, res) => {
        db.Items.destroy(
          { where: { item_id: req.body.item_id } })
          res.json("satus: 200")
      },
      archive: (req, res) => {
        db.Items.update(
          { archived: req.body.archived },
          { where: { item_id: req.body.item_id } })
          res.json("satus: 200")
      }
}

module.exports = itemApiController;