let db = require("../../database/models")
const Users = require('../../database/models/Users')

const userApiController = {
    logIn: (req, res) => {
        db.Users.findAll()
        .then((user) => {
          res.json(user)
          console.log(user)
        })
      }
}

module.exports = userApiController;