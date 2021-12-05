import { Box, Typography } from '@material-ui/core';
import { AcountContext } from '../../Context/Accountp';
import { makeStyles } from '@material-ui/styles';
import { useContext } from 'react';

const usestyle = makeStyles({
  wrapss: {
    backgroundColor: 'Lime',
    color: 'black',
    fontSize: '20px',
    maxWidth: 'fit-content',
    borderRadius: '20px',
    padding: '5px',
    // wordBreak: 'break-word',
  },
  contentss: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '20px',
  },
  own: {
    backgroundColor: 'red',
    color: 'black',
    fontSize: '20px',
    width: 'fit-content',
    borderRadius: '20px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
  },
  date: {
    marginLeft: 'auto',
  },
  datetwo: {
    marginRight: 'auto',
  },
});

export const Messagetwo = ({ message }) => {
  const { account } = useContext(AcountContext);
  const classes = usestyle();
  const lesszero = (date) => {
    if (date < 10) {
      return '0' + date;
    } else {
      return date;
    }
  };
  return (
    <Box className={classes.contentss}>
      <Typography
        className={
          account.googleId === message.senderid ? classes.own : classes.wrapss
        }
      >
        {message.text}
      </Typography>
      <Typography
        className={
          account.googleId === message.senderid ? classes.date : classes.datetwo
        }
      >
        {lesszero(new Date(message.createdAt).getHours())}:
        {lesszero(new Date(message.createdAt).getMinutes())}:
        {new Date(message.createdAt).getFullYear()}
      </Typography>
    </Box>
  );
};
