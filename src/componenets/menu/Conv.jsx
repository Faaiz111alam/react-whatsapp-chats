import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useContext, useEffect, useState } from 'react';
import { getuser } from '../../Api/Api';
import { AcountContext } from '../../Context/Accountp';
import Convers from './Convv';
// import Convers from './convs';

const usestyle = makeStyles({
  conpict: {
    height: 50,
    width: 50,
    borderRadius: 35,
    padding: 10,
  },
  convitems: {
    display: 'flex',
    alignItems: 'center',
    margin: 2,
    borderBottom: '1px solid gray',
    cursor: 'pointer',
  },
  Contofcon: {
    height: '84vh',
    overflow: 'overlay',
    borderRight: '1px solid gray',
  },
});
const Conv = ({ text }) => {
  const classes = usestyle();
  const [users, setusers] = useState([]);
  const { account, socket, setActive } = useContext(AcountContext);
  useEffect(() => {
    const data = async () => {
      const states = await getuser();
      const serachtrick = states.filter((user) => user.name.includes(text));

      setusers(serachtrick);
    };
    data();
  }, [text]);
  useEffect(() => {
    socket.current.emit('addUser', account.googleId);
    socket.current.on('getUsers', (users) => {
      setActive(users);
    });
  }, [account]);

  // // console.log(account.googleId);
  // if (users.googleId !== account.googleId) {
  return (
    <Box className={classes.Contofcon}>
      {users.map(
        (user) => user.googleId !== account.googleId && <Convers user={user} />
      )}
    </Box>
  );
};

export default Conv;
