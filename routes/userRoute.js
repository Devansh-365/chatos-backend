const express = require('express')

const router = express.Router()

const { createUser } = require('../controllers/userController')

router.get("/", (req,res) => {
    res.send('helllo')
})

router.post("/register", createUser)

module.exports = router