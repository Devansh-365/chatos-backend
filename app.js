require('dotenv').config()
require('./config/database').connect()

const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use((req,res,next) => {
    next()
})

app.use("/api/auth", userRoutes)

module.exports = app