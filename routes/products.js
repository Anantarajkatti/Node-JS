import express from "express"
import { getAllProducts, getProductById, deleteProductById, PostProducts,updatedProducts } from '../helper.js';

const router=express.Router()


 router.get('/',express.json(),async(req,res)=>{
      const {category,rating}= req.query
      console.log(req.query,category);
    
      const result=  await getAllProducts(req)
        res.send(result)
  })
  
  router.get('/:id',async(req,res)=>{
      const{id}= req.params
      console.log(req.params,id)
     // const product=products.find((pd)=>pd.id===id)
     //db query to be inserted and qury is  run by node and finds in database
     const product= await getProductById(id)
      product ? res.send(product):res.status(404).send({meassage:"product not found"})
  })


  // delete
  router.delete('/:id',async(req,res)=>{
      const{id}= req.params
      console.log(req.params,id)
     //db query to be inserted and qury is  run by node and finds in database
     const product= await deleteProductById(id)
      res.send(product)
  }) 
  
  //post
  //router.post('/products',express.json(),async(req,res)=>{
      router.post('/',async(req,res)=>{
  
      const newProduct= req.body
     //db query to be inserted and qury is  run by node and finds in database
     const result= await PostProducts(newProduct)
      res.send(result)
  })

  // PUT method
  router.put('/:id',async(req,res)=>{
    const {id}=req.params
    const updatedProduct= req.body
    const result=await updatedProducts(id,updatedProduct)
    res.send(result)
  })

  export const productRouter=router