const User = require('../models/users')

const validateEmail = async(email) => {
  const isEmail = await User.findOne({email})

  if (isEmail) {
    throw new Error(`Algo salió mal`)
  }
}

const validateUserName = async(userName) =>{
  const isUserName = await User.findOne({userName})

  if(isUserName) {
    throw new Error(`Algo salió mal`)
  }
}

module.exports = { validateEmail, validateUserName }
