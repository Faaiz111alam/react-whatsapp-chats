import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useContext } from 'react';
import { UserContext } from '../../Context/Userprovider';
import { search, MoreVert, Search } from '@material-ui/icons';
import { AcountContext } from '../../Context/Accountp';

const usestyle = makeStyles({
  header: {
    display: 'flex',

    width: '913px',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    alignItems: 'center',
  },
  Dp: {
    borderRadius: '30px',
    height: '40px',
    width: '45px',
    margin: '10px',
  },
  headerleft: {
    display: 'flex',
    // flexDirection: '',
    width: '200px',
  },
});

const ChatHedaer = () => {
  const Classes = usestyle();
  const { person } = useContext(UserContext);
  const { Active } = useContext(AcountContext);

  return (
    <Box className={Classes.header}>
      <Box className={Classes.headerleft}>
        <img className={Classes.Dp} src={person.imageUrl} alt="dp" />
        <Box>
          <Typography>{person.name}</Typography>
          <Typography>
            {Active.find((x) => x.userid === person.googleId)
              ? 'Online'
              : 'Offline'}
          </Typography>
        </Box>
      </Box>

      <Box className={Classes.items}>
        <Search />
        <MoreVert />
      </Box>
    </Box>
  );
};
export default ChatHedaer;
