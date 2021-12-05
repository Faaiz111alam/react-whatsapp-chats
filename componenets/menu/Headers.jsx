import { Box } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useContext, useState } from 'react';
import { AcountContext } from '../../Context/Accountp';
import Headersmenu from './Headersmenu';
import Infod from '../drawer/Drawer';

const style = makeStyles({
  headers: {
    height: 60,
    backgroundColor: '#ededed',
    display: 'flex',
    justifyContent: 'space-Between',
    alignItems: 'center',
    padding: 5,
  },
  Avatar: {
    borderRadius: 50,
    height: 45,
  },
  iconss: {
    '& > *': {
      margin: 7,
      color: '#919191',
    },
  },
});

const Heders = () => {
  const classes = style();
  const [open, setOpen] = useState(false);

  const { account } = useContext(AcountContext);

  const togglerow = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className={classes.headers}>
        <img
          onClick={() => togglerow()}
          className={classes.Avatar}
          src={account.imageUrl}
          alt="profile"
        />

        <Box className={classes.iconss}>
          <Chat />
          <Headersmenu />
        </Box>
      </Box>
      <Infod open={open} setOpen={setOpen} />
    </>
  );
};

export default Heders;
