import { Box, InputBase, makeStyles } from '@material-ui/core';
import { AttachFile, EmojiEmotions, Mic } from '@material-ui/icons';

const usstyle = makeStyles({
  fter: {
    height: '120px',
    backgroundColor: '#ededed',
    display: 'flex',
    padding: '10px',
    alignItems: 'center',
    '& >*': {
      margin: '5px',
    },
    position: 'relative',
  },
  clipicon: {
    transform: 'rotate(40deg)',
  },
  Inputinput: {
    height: '30px',
    padding: '5px',
  },

  InputRoot: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    width: '780px',
  },
});

const Footerme = ({ sendText, setvalue, value }) => {
  const clasees = usstyle();
  return (
    <Box className={clasees.fter}>
      <EmojiEmotions />
      <AttachFile className={clasees.clipicon} />
      <Box className={clasees.Typebox}>
        <InputBase
          placeholder="Type something"
          classes={{
            root: clasees.InputRoot,
            input: clasees.Inputinput,
          }}
          onKeyPress={(e) => sendText(e)}
          onChange={(e) => setvalue(e.target.value)}
          value={value}
        />
      </Box>
      <Mic />
    </Box>
  );
};
export default Footerme;
