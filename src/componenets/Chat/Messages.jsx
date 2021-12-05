import { Box, makeStyles } from '@material-ui/core';
import Footerme from './Fotter';
import { useContext, useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { AcountContext } from '../../Context/Accountp';
import { newmessagapi, getdifmsg, getdata } from '../../Api/Api';
import { Messagetwo } from './Messagetwo';

const ustyle = makeStyles({
  backchtimg: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    height: '400px',
    overflow: 'scroll',
  },
});

const Message = ({ converinfo, person }) => {
  const classes = ustyle();
  const [value, setvalue] = useState();
  const [messages, setmessages] = useState([]);
  const [incomingmess, setincommess] = useState(null);
  const { account, socket, setnewmssflage, newmssflage } =
    useContext(AcountContext);
  const scolref = useRef();

  useEffect(() => {
    socket.current.on('getmessage', (data) => {
      setincommess({
        senderid: data.senderid,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    const getmess = async () => {
      const allmessages = await getdifmsg(converinfo._id);
      setmessages(allmessages);
      console.log(person);
    };
    getmess();
  }, [converinfo._id, person._id, newmssflage]);

  useEffect(() => {
    scolref.current?.scrollIntoView({ transition: 'smooth' });
  }, [messages]);
  useEffect(() => {
    incomingmess &&
      converinfo.memebers?.includes(incomingmess.senderid) &&
      setmessages((prev) => [...prev, incomingmess]);
  }, [incomingmess, converinfo]);

  const reciverid = converinfo.memebers?.find((x) => x !== account.googleId);
  console.log(reciverid);
  const sendText = async (e) => {
    const messg = e.KeyCode || e.which;

    if (!value) return;
    if (messg === 13) {
      socket.current.emit('sendMessage', {
        senderid: account.googleId,
        reciverid,
        text: value,
      });

      await newmessagapi({
        senderid: account.googleId,
        conversationid: converinfo._id,
        text: value,
      });
      setvalue('');
      setnewmssflage((prev) => !prev);
    }
  };

  return (
    <Box>
      <Box id="classs" className={classes.backchtimg}>
        {messages &&
          messages.map((message) => (
            <Box>
              <Messagetwo message={message} />
            </Box>
          ))}
      </Box>
      <Footerme sendText={sendText} setvalue={setvalue} value={value} />
    </Box>
  );
};
export default Message;
