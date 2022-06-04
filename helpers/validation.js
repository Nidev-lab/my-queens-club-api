const User = require('../models/users')

const validateEmail = async(req, res, next) => {
  const {email} = req.body
  const isEmail = await User.findOne({ email })

  if (isEmail) {
    return res.json({email: {message: '* Este email ya se encuentra registrado', status: 401}})
  }
  
  next()
}

const validateUserName = async(req, res, next) =>{
  const {userName} = req.body
  const isUserName = await User.findOne({ userName })

  if(isUserName) {
    return res.json({userName: {message: '* Este nombre de usuario ya existe', status: 401}})
  }

  next()
}

module.exports = { validateEmail, validateUserName }
