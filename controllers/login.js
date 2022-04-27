require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { validationResult } = require('express-validator')
const { userNameOrEmail } = require('../helpers/loginValidate')
const token_secret = process.env.TOKEN_SECRET

const login = async (req, res) => {
  const { user , password } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: 'Algo salió mal' })
  }
  
  const userData = await userNameOrEmail(user)

  if (!userData) {
    res
      .status(400)
      .send({ mensaje: "Algo salio mal" })
    return;
  }

  try {
    const match = await bcrypt.compare(password, userData.password)
    const accessToken = jwt.sign({ userData }, token_secret, { expiresIn: '2h' })
  
    if (match) {
      res.status(200).json({
        mensaje: "Autentificación exitosa",
        name: userData.name,
        accessToken: accessToken,
      })
    } else {
      res.status(404).json({ mensaje: "Error: credenciales incorrectas" })
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = { login }
