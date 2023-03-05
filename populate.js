   
   require('dotenv').config()
   
   const connectDB = require('./DBconn/dbconn')    // invoking database conncetion 
   const Product = require('./models/schema')       // invoking our databases data schema 
   const JsonProduct = require('./products.json')   // invoking the api data of products 


   const start = async () =>{
        try {
            await  connectDB(process.env.MONGO_URI)
            await Product.deleteMany()
            await Product.create(JsonProduct)
                
            
            console.log('database connection successed !!')
            process.exit(0)
        
          } catch (error) {
          console.log(error)
          process.exit(1)
            
        }
   }

   start()


