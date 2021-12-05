import  mongoose from "mongoose";


const messgaeSchema = new mongoose.Schema({
   
    senderid: {type:String,required:true},
    conversationid: {type:String,required:true},
    text: {type:String,required:true},
},{
    timestamps:true
}
)
const Messages= mongoose.model('Messages',messgaeSchema)
export default Messages;