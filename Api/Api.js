import axios from "axios"

const URLs ='http://localhost:8000/postman'

export const Adduser=async(profileObj)=>{
 try {
     const response = await axios({
          url:`${URLs}/add/create`,
          method:'POST',
          header:{
              'Content-Type':'application/json',
          },data:profileObj,
     })
     if (!response) {
        throw new Error(response.data.message)      
     } 
          return response.data
    
    
 } catch (err) {
     console.log(err.message)
 }

}
export const getuser = async()=>{
 try {
     const response = await axios({
          url:`${URLs}/add/getuser`,
          method:'GET',
          header:{
              'Content-Type':'application/json',
          }
     })
     if (!response) {
        throw new Error(response.data.message)      
     } 
          return response.data
    
    
 } catch (err) {
     console.log(err.message)
 }

}
export const setConver = async ({senderid,reciverid})=>{
  try {
     const response = await axios({
         url:`${URLs}/new/conversation`,
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         data:{
             senderid,reciverid,
         }
     }) 
     if (!response) {
       throw new Error(response.data.message)      
     } 
     return response.data;
    
  } catch (err) {

    console.log({message:err.message})
      
  }

}

export const getdata = async(datas)=>{
    try {
        const response = await axios({
            url:`${URLs}/getdata`,
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:datas,
        })
        if (!response) {
            throw new Error(response.data.message)
            
        }
        else{
          return response.data
        }
    } catch (err) {

        console.log({message:err.message})
        
    }
}

export const newmessagapi = async({senderid,conversationid,text})=>{
    try {
        const response = await axios({
            url:`${URLs}/newmessage/add`,
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data:{
                senderid,conversationid,text
            }
           
        })
        if (!response) {
          throw new Error(response.data.message)
            
        }
        else{

            return response.data
        }
        
    } catch (err) {

        console.log(err.message)
        
    }
}

export const getdifmsg=async(id)=>{
    try {
        
        const response= await axios({
            url:`${URLs}/getdiff/${id}`,
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
    
        })
        if (!response) {
            throw new Error(response.data.message)
            
        }
        return response.data
    } catch (err) {
        console.log(err.message)
    }

}