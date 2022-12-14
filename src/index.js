const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./routes/route')

const app = express()
app.use(bodyParser.json())
const multer = require("multer");


mongoose.connect("mongodb+srv://lalitkishork73:UzPr9bb6Wvxda9eC@cluster0.o2wavxe.mongodb.net/Assingment1DB?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error))
app.use(multer().any())

app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log("express app is running on PORT " + (process.env.PORT || 3000))
})