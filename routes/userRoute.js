const express = require('express')

const router = express.Router()

const { createUser, loginUser, setUserAvatar } = require('../controllers/userController')

router.get("/", (req,res) => {
    res.send('helllo')
})

router.post("/register", createUser)

router.post("/login", loginUser)

router.post("/setAvatar/:id", setUserAvatar)

module.exports = router