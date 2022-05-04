const { Schema, model } = require('mongoose');

const galleries = new Schema({
  idQueen: String,
  galleryName: String,
  coverPhotoGallery: String,
  price: Number,
  photos: [String],
})

module.exports = model('Galleries', galleries)
