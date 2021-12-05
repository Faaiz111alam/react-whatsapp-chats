import { Server } from "socket.io";


const Port=9000;


const io =new Server(Port,{
    cors:{
        origin:'http://localhost:3000'
    }
})
let users=[];
const addUser=(userid,socketId)=>{
    
    // user.find(x=>x.userid !==x.userid)
    
      const cc = !users.find((x)=>x.userid === userid)
     if (cc) {
         users=[...users,{userid,socketId}]
         console.log(users)
         
     }
    }
   const removeuser=(soketid)=>{
       users.filter((x)=>x.socketId !== soketid)


   }
    const getUser=(userId)=>{
  
        return  users.find((x)=>x.userid===userId)
        
        // return boll;
        
    }
io.on('connection',(socket)=>{
    console.log("user connected")


    socket.on('addUser',userid=>{
        addUser(userid,socket.id)
      io.emit('getUsers',users)
    //   console.log(userid)
    //   console.log(users)
       
        
    })
    // mess
    socket.on('sendMessage',({senderid,reciverid,text})=>{
        
        const user =getUser(reciverid)
        console.log(text)

       
        io.to(user.socketId).emit('getmessage',{
            senderid,text 
        })
        

    }
    )
    socket.on('disconnect',()=>{
            console.log('disccont')
        removeuser(socket.id)
        io.emit('getUsers',users)
    })

})