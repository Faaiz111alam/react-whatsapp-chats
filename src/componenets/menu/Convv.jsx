import { makeStyles } from '@material-ui/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { getdata, setConver } from '../../Api/Api';
import { AcountContext } from '../../Context/Accountp';
import { UserContext } from '../../Context/Userprovider';

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
    // margin: 2,

    cursor: 'pointer',
  },
  // Contofcon: {
  //   height: '84vh',
  //   overflow: 'overlay',
  //   borderRight: '1px solid gray',
  // },
  display: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  newmss: {
    display: 'flex',
    marginLeft: '20px',
  },
});

const Convers = ({ user }) => {
  const classes = usestyle();
  const { account, newmssflage } = useContext(AcountContext);
  const { person, setperson } = useContext(UserContext);

  const [message, setmessge] = useState({});

  useEffect(() => {
    const getmess = async () => {
      const setmss = await getdata({
        senderid: account.googleId,
        reciverid: user.googleId,
      });
      setmessge({ message: setmss.message });
    };
    getmess();
  }, [newmssflage]);

  const setUser = async () => {
    setperson(user);

    await setConver({ senderid: account.googleId, reciverid: user.googleId });
  };

  return (
    <div className={classes.display}>
      <div className={classes.convitems} onClick={() => setUser()}>
        <img src={user.imageUrl} alt="profile" className={classes.conpict} />
        <div className="namecon">{user.name}</div>
      </div>
      <div className={classes.newmss}>{message.message}</div>
    </div>
  );
};
export default Convers;
