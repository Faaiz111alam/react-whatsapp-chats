import {Drawer,Box, Typography, makeStyles} from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons";
import { useState } from "react";
import Profilescreen from "./Profile"

const ustyels=makeStyles({
    tycss:{
        backgroundColor:'#00bfa5',
        height:97,
        color:'white',
        display:'flex',
        '& >*':{
     marginTop:'auto',
     padding:'20px'
        }

    },
    componenets:{
        backgroundColor:'#ededed',
        height:'85%'

    }
})
const Infod =({open,setOpen})=>{
    const classess= ustyels()
 
    
    const  handleclose=()=>{
        setOpen(false)
    }
    // const handlepro=()=>{
    //     setOpend(false)
    // }

    return (
        <Drawer open={open} onClick={()=> handleclose()}>

            <Box className={classess.tycss}>
                <ArrowBack onClick={()=> handleclose()}/>
                <Typography>
                    Profile
                </Typography>

            </Box>
            <Box className={classess.componenets}>
                <Profilescreen/>
            </Box>
            


        </Drawer>

     

    )



}
export default Infod