const express = require('express')
const createClients  = require('../controllers/createClients')
const getClients  = require('../controllers/getClients')
const deleteClient  = require('../controllers/deleteClient')
const updateClient  = require('../controllers/updateClient')
const router = express.Router()
// const router = express.Router()
// async function client(router)  {
    router.post('/createClient', createClients.createUser)
    router.get('/getClients', getClients.getUsers)
    router.delete('/deleteClient/:id', deleteClient.deleteUser)
    router.put('/updateClient', updateClient.updateUsers)
module.exports = router
