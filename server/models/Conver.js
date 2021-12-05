import  mongoose from "mongoose";


const NewCon = new mongoose.Schema({
    memebers:{type:Array},
    message:{type:String}
}
,{timestamps:true})


const Convermodel= mongoose.model('Convermodel',NewCon)
export default Convermodel;