import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { HomeContext } from '../../contexts/HomeContext';
import * as colors from '../../constants/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    placeContent: 'space-between'
  },
  slider: {
    width: '50%',
    marginRight: '20px',
  },
  margin: {
    height: theme.spacing(3),
  },
  date: {
    color: colors.BROWN_LIGHTER
  }, 
  buttonsContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttons: {
    borderRadius: '0px',
    minWidth: '120px',
    '&:hover': {
    backgroundColor: colors.BLACK,
    borderColor: colors.BLACK,
    boxShadow: 'none',
  },
  '&:active': {
    
  },
  '&:focus': {
    backgroundColor: colors.BLACK,
    borderColor: colors.BLACK,
  },

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
    color: colors.BROWN_LIGHT,
    padding: '2px 0'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
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
  }
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
        <Typography className={classes.date}>Abril 4, 2020</Typography>
        
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
        <div className={classes.buttonsContainer}>
          <Button variant="outlined" size="small" className={classes.buttons} color="inherit">Sospechosos</Button>
          <Button variant="outlined" size="small" className={classes.buttons} color="inherit">Descesos</Button>
        </div>
    </div>
  );
}

export default CustomizedSlider;