const User = require('../models/users')

const validateEmail = async(email) => {
  const isEmail = await User.findOne({email})

  if (isEmail) {
    throw new Error(`El email ${email} ya existe`)
  }
}

const validateUserName = async(userName) =>{
  const isUserName = await User.findOne({userName})

  if(isUserName) {
    throw new Error(`El Nombre de Usuario ${userName} ya existe`)
  }
}

module.exports = { validateEmail, validateUserName }
