require('dotenv').config()
const mongoose = require('mongoose')

const connectionDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/MQC')
    console.log('Conexión Exitosa');
  } catch (error) {
    console.log(error);
  }
}

connectionDB()
module.exports = { connectionDB }
