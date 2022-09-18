const bcrypt = require('bcrypt')
const Users = require('../models/userModel')

const createUser = async (req,res,next) => {
    try {
        const {username, email, password} = req.body

        if(!(username && email && password )){
            res.status(400).send('All fields are required')
        }

        const usernameCheck = await Users.findOne({username})
        if(usernameCheck) {
            return res.status(401).json({ msg: "Username already exists", status: false})
        }
        const emailCheck = await Users.findOne({email})
        if(emailCheck) {
            return res.status(401).json({ msg: "Email already exists", status: false})
        }

        const encyPassword = await bcrypt.hash(password, 10)

        const user = await Users.create({
            username,
            email: email.toLowerCase(),
            password: encyPassword,
        })

        user.password = undefined

        res.status(201).json(user)

    } catch (err) {
        res.status(400).json({error: err})
    }
}

const loginUser = async (req,res,next) => {
    try {
        const {email, password} = req.body

        if(!(email && password )){
            res.status(400).send('All fields are required')
        }

        const user = await Users.findOne({ email })
        if(!user) {
            return res.json({msg: "Incorrect username or password", status: false})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.json({msg: "Incorrect username or password", status: false})
        }

        user.password = undefined

        res.status(201).json({status: true , user})

    } catch (err) {
        res.status(400).json({error: err})
    }
}

module.exports = { createUser, loginUser }
