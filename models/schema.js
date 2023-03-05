
      const mongoose = require('mongoose')

      const ProcutSchema = new mongoose.Schema( {
            name : {
              type : String,
              required : [true,'product name required , u must provide a Name'],
              
            },

            price : {
              type : Number,
              required : [true,'product price required , u must provide a Price'],
              
            },

            featured : {
                type : Boolean ,
                default : false

            },
            rating : {
                type : Number,
                default : 4.5

            },
            createdAt : {
                type : Date,
                default : Date.now()

            },
            company : {
                type : String,
                enum : {
                    values : ['oreedo' , 'microsoft' , 'yassir' , 'Nedjma' , 'Orestor'],
                    message  :'{VALUE} is not included pls try Again '
                }
                 
                
                //enum : ['oreedo' , 'microsoft' , 'yassir' , 'Nedjma' , 'Orestor']
            }
      })


      module.exports = mongoose.model('prouduc',ProcutSchema)