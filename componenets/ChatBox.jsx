import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';
import Chat from './Chat/Chat';
import Menu from './menu/Menu';
import { useContext } from 'react';
import UserProvider, { UserContext } from '../Context/Userprovider';
import { EmptyChats } from './EmptyChat';

const ustyle = makeStyles({
  component: {
    display: 'flex',
    height: '100%',
  },
  leftcomp: {
    width: 300,
  },
});
const stysle = {
  dailouge: {
    height: '95%',
    width: '95%',
    marginTop: '6%',
    boxShadow: 'none',
    borderRadius: '0',
    maxHeight: '90%',
    maxWidth: '90%',
    overflow: 'hidden',
  },
};
const ChatBox = ({ classes }) => {
  const { person } = useContext(UserContext);
  const classname = ustyle();
  return (
    <Dialog open={true} classes={{ paper: classes.dailouge }}>
      <Box className={classname.component}>
        <Box className={classname.leftcomp}>
          {' '}
          <Menu />{' '}
        </Box>
        <Box className={classname.rightcomp}>
          {Object.keys(person).length ? <Chat /> : <EmptyChats />}
        </Box>
      </Box>
    </Dialog>
  );
};
export default withStyles(stysle)(ChatBox);
