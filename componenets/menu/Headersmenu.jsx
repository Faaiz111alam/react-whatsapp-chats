import { useContext, useState } from 'react';
import { MoreVert } from '@material-ui/icons';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { AcountContext } from '../../Context/Accountp';
import { cust } from './Clientdata';
import Infod from '../drawer/Drawer';
const ussStyles = makeStyles({
  logoutpro: {
    fontSize: 12,
    padding: ' 15px 10px 15px 10px,',
  },
});

const Headersmenu = () => {
  const classes = ussStyles();
  const [open, setopen] = useState(false);
  const [openagain, setopenagain] = useState(false);
  const { setAccount } = useContext(AcountContext);
  const handleClose = () => {
    setopen(false);
  };
  const handleClick = (event) => {
    setopen(event.currentTarget);
  };
  const onLogoutSuccess = () => {
    alert('you have been logged out successfully');
    console.clear();
    setAccount('');
  };
  const toggledrwagain = () => {
    setopenagain(true);
  };
  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          className={classes.logoutpro}
          onClick={() => {
            handleClose();
            toggledrwagain();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem className={classes.logoutpro} onClick={handleClose}>
          <GoogleLogout
            clientId={cust}
            cookiePolicy={'single_host_origin'}
            buttonText="Logout"
            isSignedIn={true}
            onLogoutSuccess={onLogoutSuccess}
          />
        </MenuItem>
      </Menu>
      <Infod open={openagain} setOpen={setopenagain} />
    </>
  );
};
export default Headersmenu;
