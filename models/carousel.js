const { Schema, model } = require('mongoose')

const carousel = new Schema({
  coverImage: String  
})

module.exports = model('Carousel', carousel)