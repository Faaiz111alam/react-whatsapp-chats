import mongoose from 'mongoose'

const Connection =(username,password)=>{
  
    const URLL =`mongodb+srv://${username}:${password}@chatapp.kfc8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
     mongoose.connect(URLL,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
        console.log('been conntecd');
    }).catch((error)=>{
        console.log(error.reason)

    })


}
export default Connection