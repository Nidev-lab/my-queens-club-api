const { Router } = require('express')
const route = Router()
const { body } = require('express-validator')
const { createGalleries } = require('../controllers/galleries')
const { jwtValidator } = require('../middleware/jwt')

route
  .post('/',
    jwtValidator,
    body('galleryName').trim().escape().isAlpha('es-ES', {ignore: ' '}).not().isEmpty().isLength({min: 3, max: 20}),
    body('coverPhotoGallery'),
    body('price').trim().escape().isNumeric().isLength({min: 2, max: 5}),
    body('[photos]'),
    createGalleries
  )

module.exports = route
