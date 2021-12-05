import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const usestyle = makeStyles({
  emptypro: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '800px',
  },
  emptypic: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    opacity: '0.6',
    borderRadius: '30px',
    backgroundColor: 'blue',
    width: '500px',
  },
});

export const EmptyChats = () => {
  const classes = usestyle();
  const url =
    'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';
  return (
    <Box className={classes.emptypro}>
      <img className={classes.emptypic} src={url} alt="empty" />
    </Box>
  );
};
