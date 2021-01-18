const express = require('express')
const router = express.Router()
const authc = require('../controller/authc')

router.post('/register',authc.register)
router.post('/login',authc.login)

module.exports = router