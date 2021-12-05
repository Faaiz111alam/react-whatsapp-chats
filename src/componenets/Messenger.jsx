import React, { useContext } from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Login from './Accounts/Login';
import { AcountContext } from '../Context/Accountp';
import ChatBox from './ChatBox';

const ustyle = makeStyles({
  loginheaders: {
    height: 200,
    background: '#00bfa5',
    boxShadow: 'none',
  },
  headers: {
    height: 100,
    background: '#00bfa5',
    boxShadow: 'none',
  },
});

const Messenger = () => {
  const classess = ustyle();
  const { account } = useContext(AcountContext);
  return (
    <box>
      <AppBar className={account ? classess.headers : classess.loginheaders}>
        <Toolbar></Toolbar>
      </AppBar>

      {account ? <ChatBox /> : <Login />}
    </box>
  );
};

export default Messenger;
