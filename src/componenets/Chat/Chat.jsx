import { Box } from '@material-ui/core';
import ChatHedaer from './Chatheader';
import { useEffect, useState, useContext } from 'react';
import Message from './Messages';
import { UserContext } from '../../Context/Userprovider';
import { AcountContext } from '../../Context/Accountp';
import { getdata } from '../../Api/Api';
const Chat = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AcountContext);

  const [converinfo, setconver] = useState({});
  useEffect(() => {
    const getdatadetails = async () => {
      const setcon = await getdata({
        senderid: account.googleId,
        reciverid: person.googleId,
      });
      setconver(setcon);
    };

    getdatadetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHedaer />

      <Message converinfo={converinfo} person={person} />
    </Box>
  );
};

export default Chat;
