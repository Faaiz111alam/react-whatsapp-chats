import React from 'react';
// import './App.css';

// import './App.css';
import Messenger from "./componenets/Messenger";
import AccountProvider from './Context/Accountp';
import UserProvider from './Context/Userprovider';
import Themp from './them/Thempro';



function App() {
  return (
    <Themp>

      <UserProvider>

    <AccountProvider>

      <Messenger />
    </AccountProvider>
    </UserProvider>

    </Themp>
    
    
    

      
        
  )

 
    }

export default App;
