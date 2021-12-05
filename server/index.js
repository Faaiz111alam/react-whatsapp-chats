import exprees from 'express';
import cors from "cors"
import Connection from './data/Db.js';
import dotenv from 'dotenv';
import route from "./routes/Router.js"
import bodyParser from 'body-parser';



dotenv.config();
const app=exprees()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/postman/add',route)
app.use('/postman/new',route)
app.use('/postman/getdata',route)
app.use('/postman/newmessage',route)
app.use('/postman/getdiff',route)
const username =process.env.MONGODB_USERNAME;
const password =process.env.MONGODB_PASSWORD;


Connection(username,password);
app.listen(8000,()=>{
    console.log('port working')
})

