/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box,makeStyles,Typography } from "@material-ui/core"
import { useContext } from "react"
import { AcountContext } from "../../Context/Accountp"

const ustyles =makeStyles({
   prstyle:{
      
      width:150,
      height:150,
      borderRadius:'50%',
      padding:10
   },
   imgecont:{
      display:'flex',
      justifyContent:'center'

   },
   namecon:{
      backgroundColor:'white',
      padding:10,
    
      boxShadow:'0 0.10px 2px rgb(0,0,0,0.6)',
      '&>*':{
         margin:10
         
      },
      '& :first-child':{
         color:'#009688',
         fontSize:'20px'


      },
   },
   description:{
      padding:'20px',
      '& >*':{
         color:'gray'
      }
    
      
      
   }
})

const Profilescreen=()=>{
   const {account}=useContext( AcountContext )
   const classes=ustyles();
   return(
       <>
    <Box className={classes.imgecont}>
       <img  className={classes.prstyle} src={account.imageUrl} alt="profile picture"/>

    </Box>
    <Box className={classes.namecon}>
       <Typography>
          Your Name
       </Typography>
       <Typography>
          {account.name}
       </Typography>
    </Box>
    <Box className={classes.description}><Typography>This is not your username or pin .This name will be visible to your whatsapp contact</Typography> </Box>
    <Box className={classes.namecon}>
       <Typography>
          About
       </Typography>
       <Typography>
          keep going!
       </Typography>
    </Box>
    </>

   )

}
export default Profilescreen