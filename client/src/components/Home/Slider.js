import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { HomeContext } from '../../contexts/HomeContext';
import * as colors from '../../constants/colors';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    placeContent: 'space-between'
  },
  slider: {
    width: '30%'
  },
  margin: {
    height: theme.spacing(3),
  },
  buttonsContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonConfirm: {
    borderRadius: '0px',
    minWidth: '120px',
    '&:hover': {
      backgroundColor: colors.BLACK,
      borderColor: colors.BLACK,
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: colors.BLUE,
      borderColor: colors.BLUE,
    },
    '&:focus': {
      backgroundColor: colors.BLUE,
      borderColor: colors.BLUE,
    },
  },
  buttonDead: {
    borderRadius: '0px',
    minWidth: '120px',
    '&:hover': {
      backgroundColor: colors.BLACK,
      borderColor: colors.BLACK,
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: colors.RED,
      borderColor: colors.RED,
    },
    '&:focus': {
      backgroundColor: colors.RED,
      borderColor: colors.RED,
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row'
  }, 
  text: {
    display: 'flex',
    margin: '0px 10px',
    letterSpacing: '2px',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotConfirm: {
    color: colors.BLUE_LIGHT
  },
  dotDeads: {
    color: colors.RED
  }
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    height: '8px',
    color: '#fff',
    padding: '2px 0'
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -9,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#fff',
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
	},
	mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);


const CustomizedSlider = () => {
	const classes = useStyles();
	const {state, changeDate } = React.useContext(HomeContext);
		let max = 0;

	if(!state.dates) {
		return null;
	}
	
	max = state.dates.length - 1;
	
  return (
    <div className={classes.container} >
        <div className={classes.slider}>
          <div className={classes.root}>
            <PrettoSlider 
              min={0} 
              step={1} 
              max={max} 
              onChange={changeDate}
              scale={(x) => state.dates[x]} 
              valueLabelDisplay="auto"
              aria-label="pretto slider" 
              defaultValue={max} />
          </div>
        </div>
        <div className={classes.textContainer}>
          <Typography className={classes.text}>Abril 4, 2020 |</Typography>
          <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotConfirm}/> 1,000 </Typography>
          <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotDeads}/> 2,000 </Typography>
        </div>
        <div className={classes.buttonsContainer}>
          <Button variant="outlined" size="small" className={classes.buttonConfirm} color="inherit">Confimados</Button>
          <Button variant="outlined" size="small" className={classes.buttonDead} color="inherit">Descesos</Button>
        </div>
    </div>
  );
}

export default CustomizedSlider;