//Material UI
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const TransparentInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 25,
    position: 'relative',
    backgroundColor: "rgba(255,255,255,0.05)",
    border: 'none',
    fontSize: 16,
    color:  'white',
    padding: '15px 26px 15px 12px',
    marginBottom: "0px",
    width: "100%",
    minWidth: '150px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 25,
      backgroundColor: "rgba(255,255,255,0.05)",
    },
  },
}))(InputBase);

export {TransparentInput}