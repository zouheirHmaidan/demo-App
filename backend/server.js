const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ClientModel = require('./models/Client')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const app = express()


mongoose.connect('mongodb+srv://mern:mongodb@cluster0.bii6v.mongodb.net/task1?retryWrites=true&w=majority')
.then((result) => {
    console.log('Connected to database')
})
.catch((error) => {
    console.log(error)
})
app.use(bodyParser.urlencoded({
    extended: false
 }));
app.use(express.json())
app.use(cors())
app.use('/client',routes)


app.listen(3001, (req,res) => {
    console.log('Server running on port 3001')
}) 