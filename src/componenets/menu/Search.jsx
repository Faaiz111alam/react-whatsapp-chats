import { Box, makeStyles, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const searchstyle = makeStyles((theme) => ({
  component: {
    backgroundColor: 'white',
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: 'whitesmoke',
    borderRight: '1px solid gray',
    padding: 0,

    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '275px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '23ch',
    },
  },
}));

const Serch = ({ setjext }) => {
  const classes = searchstyle();
  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <SearchIcon fontSize="small" />
      </Box>
      <InputBase
        placeholder="Search or start a new chat"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setjext(e.target.value)}
      />
    </Box>
  );
};

export default Serch;
