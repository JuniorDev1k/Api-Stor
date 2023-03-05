   const express = require('express')
   const Router = express.Router()

   const { getAllProductStatic ,  getAllProducts ,  } = require('../controllers/stopr.api')
   
    
    
    Router.route('/').get(getAllProducts)
    Router.route('/static').get(getAllProductStatic)
     
   
   
   
   
   
   
   module.exports = Router








