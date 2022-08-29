const axios = require('axios');
const { CONFIG } = require('../config');
const { OK, BAD_REQUEST } = require('../responses');


module.exports.allCategories = async (
  /** @type {import('express').Request } */
  req,
  /** @type {import('express').Response } */
  res
)=>{
  
  try {
    
    const result = await axios.get(`${CONFIG.BASE_URL}/categories.php`)
    
    return res.status(200).json( OK({ data: result.data, path: req.originalUrl }) )
    
  } catch (error) {
    console.log(error) 
    
    return res.status(400).json( BAD_REQUEST({ path: req.originalUrl }) )
  }
  
  
  
}


module.exports.allMealsByCategory = async (
  /** @type {import('express').Request } */
  req,
  /** @type {import('express').Response } */
  res
)=>{
  
  
}


module.exports.mealById = async (
  /** @type {import('express').Request } */
  req,
  /** @type {import('express').Response } */
  res
)=>{
  
  
}