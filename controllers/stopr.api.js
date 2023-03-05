
      const Product =  require('../models/schema')
      
      const getAllProductStatic =  async (req,res)=>{
        const Productst = await Product.find({})  
        res.status(200).json({msg : Productst })
      }

     //all products >>>>>>----
      
     
     
     const getAllProducts =  async (req,res)=>{
        
      
      
    const {featured , name , company ,sort , fields} = req.query
    
    const reQuery  = {}
    
    if(featured){
          reQuery.featured = featured === 'true' ? true : false 
      }
     
    if(company){
          reQuery.company = company
      }
      
    if(name){
          reQuery.name = { $regex: name}   //getting an product with at least  name : (letter.req) 
      }
       
    
    let result = Product.find(reQuery)
      
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
   
     
    
    if(fields){
        const filedsList = fields.split(',').join(' ')
        result = result.select(filedsList)
      }
        const Products = await result
       
        res.status(200).json({data :Products})
      }

    module.exports = { getAllProductStatic , getAllProducts ,}