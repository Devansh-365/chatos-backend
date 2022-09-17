require('dotenv').config()
require('./config/database').connect()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res) => {
    res.send("<h1>Hello backend</h1>")
})

module.exports = app