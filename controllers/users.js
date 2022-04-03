const { validationResult } = require('express-validator')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const createUser = async(req, res) =>{
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: 'Algo salió mal'})
  }
  
  try{
    const { email, userName, name, lastName, password, role } = req.body

    const newUser = new User({
      email,
      userName,
      name,
      lastName,
      password,
      role
    })

    const salt = bcrypt.genSaltSync()
    newUser.password = bcrypt.hashSync(password, salt)

    await newUser.save()
      res.json(`User created successfully`)
    } 
  catch(error){
    return res.status(404).json({
      message: "Cannot create user"
    })
  }
}

module.exports = { createUser }
