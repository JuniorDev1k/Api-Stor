  require('dotenv').config()
const { Router } = require('express')
  const express = require('express')
   const DBconnect =  require('./DBconn/dbconn')

   const storRoute  = require('./routes/store')

  const app = express()

  

  const { notFound , errorHandler } = require('./middlwares/error-handler')

  const PORT  = 4000

    //middlwares : >>>>
 
 
  app.use('/Api/v1/products',storRoute)
  app.use(express.json())

   

  
  app.get('/',(req,res)=>{
      res.status(200).send('<h3 style ="color : gray"> Home page</h3> <a href="/products">Products </a>')
  })

  app.get('/products',(req,res)=>{
      res.status(200).send('Product Page')
  })
  
  const start = async () =>{

    try {
      
      await DBconnect(process.env.MONGO_URI)
      app.listen(PORT,() => console.log(`server running on localhost:${PORT}`))
      console.log('database connceted succesfully')
      
  } catch (error) {
    console.log(`error!! server not runing on because :  ${error}`)
  }
  

}

start()
  
