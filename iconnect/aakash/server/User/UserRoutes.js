const express = require("express")
const router = express.Router()
const UserController = require('./UserController')

router.post('/addUser', UserController.addUser)

router.post('/userLogin',UserController.userLogin)


module.exports = router