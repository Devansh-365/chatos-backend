const express = require('express')

const router = express.Router()

const { createUser, loginUser } = require('../controllers/userController')

router.get("/", (req,res) => {
    res.send('helllo')
})

router.post("/register", createUser)

router.post("/login", loginUser)

module.exports = router