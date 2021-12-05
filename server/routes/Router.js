import express from 'express';
import Convermodel from '../models/Conver.js';
import Messages from '../models/Messgaemodel.js';
import User from '../models/User.js';


const route =express.Router()

route.post('/create',async(req,res)=>{
    try {

        const double= await User.findOne({
            email:req.body.email
        })
        
        if (double) {
            res.status(200).send({message:'user exist'})
            return;
            
            
        }
        const response = new User({
         googleId: req.body.googleId,
         imageUrl: req.body.imageUrl,
         email: req.body.email,
         name: req.body.name,
         givenName: req.body.givenName,
         familyName: req.body.familyName
        })
        const createduser = await response.save()
        res.send(createduser)
    } catch (err) {
        res.status(404).send({message:err.message})
        
    }

   

})
route.get('/getuser',async(req,res)=>{
    try {
        const response =  await User.find({})
        res.status(200).send(response)
        
    } catch (err) {
        res.status(401).send({message:err.message})


        
    }

})
route.post('/conversation',async(req,res)=>{
    const senderid = req.body.senderid;
    const reciverid =req.body.reciverid
    try {

     const trackss= await Convermodel.findOne({memebers:{ $all: [reciverid,senderid]}})
     if (trackss) {
         res.status(200).send('already exitss')
         return;         
     }
        const newconver = new Convermodel({
             
            memebers:[senderid,reciverid]
            
            
        })
        const response =await newconver.save()
        res.status(200).send(response)
        
    } catch (err) {
        res.status(401).send({message:err.message})
        
    }
   


})
route.post('/',async(req,res)=>{
   const response = await Convermodel.findOne({memebers:{ $all: [req.body.senderid,req.body.reciverid]}})
     res.send(response)


})
route.post('/add',async(req,res)=>{
    try {
         const resp = new Messages({
            senderid:req.body.senderid,
           conversationid:req.body.conversationid,
           text:req.body.text

         })
          const checkres= await resp.save()
          await Convermodel.findByIdAndUpdate(req.body.conversationid,{message:req.body.text})
          res.status(200).send(checkres)
         
    } catch (err) {
        res.status(401).send({ message: err.message })
        
    }
  
    
})
route.get('/:id',async(req,res)=>{
    try {
        const response = await Messages.find({conversationid:req.params.id})
        res.status(201).send(response)
        
    } catch (error) {
        res.status(401).send({message:error.message})
        
    }

})
export default route;