import React,{createContext} from "react"
import { ThemeProvider,createTheme } from "@material-ui/core/styles"


 export const Template= createContext(null)

const Themp =({children})=>{

    const them = createTheme({
        overrides:{
            MuiDrawer:{
        paperAnchorLeft:{
            height:'95%',
            top:20,
            width:'29%',
            left:60
        }

            }
        }


    })

    return(
        <Template.Provider>
            <ThemeProvider theme={them}>
                {children}

            </ThemeProvider>

        </Template.Provider>

    )
}
export default Themp