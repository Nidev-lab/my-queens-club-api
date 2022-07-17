const Purchase = require('./../models/purchase') 

const getPurchases = async(req, res) => {
  res.json({userId :req.userId, userEmail: req.userEmail})
};

const createPayment = async (req, res) => {

  try {
    
  } catch (error) {
    
  }
};

module.exports = {
  getPurchases,
  createPayment,
};
