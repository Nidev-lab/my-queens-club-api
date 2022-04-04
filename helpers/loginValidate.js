const User = require('../models/users')

const userNameOrEmail = async (email, userName) => {
  if (email) {
    const user = await User.findOne({ email })
    return user
  }

  if (userName) {
    const user = await User.findOne({ userName })
    return user
  }
}

module.exports = { userNameOrEmail }
