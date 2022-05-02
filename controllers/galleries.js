const { validationResult } = require('express-validator')
const Galleries = require('../models/galleries')

const createGalleries = async(req, res) =>{
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: 'Algo salió mal'})
  }
  try{
    const { nameGallery, price, coverPhotoGallery, photos } = req.body
    const newGallery = new Galleries({
      nameGallery,
      coverPhotoGallery,
      price,
      photos
    })
    await newGallery.save()
    res.json(`Gallery created successfully`)
  } 
  catch(error){
    return res.status(404).json({
      message: "Cannot create Gallery"
    })
  }
}
       
module.exports = { createGalleries }
