import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  ListItem,
  List,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import React, { useContext } from 'react';
import { AcountContext } from '../../Context/Accountp';
import { cust } from '../menu/Clientdata';
import { Adduser } from '../../Api/Api';

const mstyle = makeStyles({
  componenets: {
    display: 'flex',
  },
  leftcom: {
    padding: '10px',
    overFlow: 'hidden',
  },
  qrcode: {
    height: 290,
    width: 290,
  },
  typcss: {
    fontSize: '30px',
  },
});

const stysle = {
  dailouge: {
    height: '100%',
    width: '100%',

    boxShadow: 'none',
    borderRadius: '0',
    maxHeight: '100%',
    maxWidth: '85%',
  },
};

const qrr = '../qrcode.jpg';

const Login = ({ classes }) => {
  const faaiz = mstyle();

  const { account, setAccount } = useContext(AcountContext);
  const onLoginSuc = async (res) => {
    setAccount(res.profileObj);

    await Adduser(res.profileObj);
  };
  const onloginfail = () => {
    console.log('suc');
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dailouge }}
      BackdropProps={{ style: { backgroundColor: 'unset' } }}
    >
      <Box className={faaiz.componenets}>
        <Box className={faaiz.leftcom}>
          <Typography className={faaiz.typcss}>
            To Use Whatsapp on Your computer
          </Typography>
          <List>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>
              2.Tap menu or settings and select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code{' '}
            </ListItem>
          </List>
        </Box>
        <Box>
          <img src={qrr} alt="qr" className={faaiz.qrcode} />

          <GoogleLogin
            clientId={cust}
            cookiePolicy={'single_host_origin'}
            buttonText=""
            isSignedIn={true}
            onSuccess={onLoginSuc}
            onFailure={onloginfail}
          />
        </Box>
      </Box>
    </Dialog>
  );
};
export default withStyles(stysle)(Login);
