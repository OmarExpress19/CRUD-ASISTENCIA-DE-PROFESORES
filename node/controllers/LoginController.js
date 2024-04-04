const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/SisModel.js')

loginRouter.post('/', async(req, res)=>{
    const {body} = req
    const {correo, pass}=body
})

  