const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    age: {type: Number},
    phone: {type: String},
    address: {type: String}
})

const ClientModel = mongoose.model('clients', ClientSchema)
module.exports = ClientModel