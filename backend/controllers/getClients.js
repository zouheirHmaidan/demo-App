const ClientModel = require('../models/Client')

exports.getUsers = (req,res) => {
    ClientModel.find({}, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}