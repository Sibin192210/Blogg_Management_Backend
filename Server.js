const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const db = require("./DbConnection")
const cors =require("cors")
app.use(bodyparser.json())
const Router = require("./Router")
app.use(express.static(`${ __dirname } / upload`));
app.use(cors())
app.use("/",Router)

app.listen(3003, function () {
    console.log('succesfully port runing')
})