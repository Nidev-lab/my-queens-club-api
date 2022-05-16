const { validationResult } = require('express-validator')
const Queen = require('../models/queen')
const Galleries = require('../models/galleries')

const createGalleries = async(req, res) =>{
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: 'Algo salió mal'})
  }
  try{
    const { galleryName, price, coverPhotoGallery, photos, idQueen } = req.body
    const nameQueen = await Queen.findById(idQueen)

    const newGallery = new Galleries({
      galleryName,
      coverPhotoGallery,
      nameQueen: nameQueen.name,
      price,
      photos,
      idQueen
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

const getAllGalleries = async(req, res) => {
  try {
    const data = await Galleries.find()

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
       
module.exports = { createGalleries, getAllGalleries }
