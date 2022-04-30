const { Router } = require('express')
const route = Router()
const { body } = require('express-validator')
const { createQueen, getQueen, deleteQueen, editQueen } = require('../controllers/queen')
const { validateQueen } = require('../helpers/queenValidate')
const { jwtValidator } = require('../middleware/jwt')

route
  .get('/',
    jwtValidator,
    getQueen
  )

route
  .post('/', 
    jwtValidator,
    body('name').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 3, max: 25}),
    body('name').custom(validateQueen),
    body('coverImage'),
    createQueen
  )

route
  .put('/:queenId',
    jwtValidator,
    editQueen
  )

route
  .delete('/',
    jwtValidator,
    deleteQueen
  )

module.exports = route
