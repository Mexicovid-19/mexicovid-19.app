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
import { MONTHS } from '../../constants/date';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    placeContent: 'space-between'
  },
  slider: {
    width: '20%'
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
  button: {
    borderRadius: '0px',
    minWidth: '120px',
    '&:hover': {
      backgroundColor: colors.BLACK,
      borderColor: colors.BLACK,
      boxShadow: 'none',
    },
  },
  buttonConfirm: {
    borderRadius: '0px',
    minWidth: '120px',
    backgroundColor: colors.BLUE,
    borderColor: colors.BLUE,
    '&:focus': {
      backgroundColor: colors.BLUE,
      borderColor: colors.BLUE,
    },
  },
  buttonDead: {
    borderRadius: '0px',
    minWidth: '120px',
    backgroundColor: colors.RED,
    borderColor: colors.RED,
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

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: colors.WHITE,
    color: colors.BLACK,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <LightTooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </LightTooltip>
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
	const {state, changeDate, dataChart, onSelectLabel, selectedLabel } = React.useContext(HomeContext);
  let max = 0;
  let totalConfirm = 0;
  let totalDeads = 0;

	if(!state.dates) {
		return null;
  }
  
  if(dataChart.length > 0) {
    totalConfirm = dataChart[0].data.find((x) => { return x.x === state.shortDate }).y;
    totalDeads = dataChart[1].data.find((x) => { return x.x === state.shortDate }).y;
  }
	
  max = state.dates.length - 1;
  let formatedDate = new Date(state.date);
  formatedDate = `${formatedDate.getDate()} de ${MONTHS[formatedDate.getMonth()]}, 2020`;
  
  return (
    <div className={classes.container} >
        <div className={classes.slider}>
          <Typography className={classes.text}>Fecha </Typography>
          <div className={classes.root}>
            <PrettoSlider 
              ValueLabelComponent={ValueLabelComponent}
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
          <Typography className={classes.text}>{formatedDate} | Totales:</Typography>
          <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotConfirm}/> {totalConfirm} </Typography>
          <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotDeads}/> {totalDeads} </Typography>
        </div>
        <div className={classes.buttonsContainer}>
          <Button variant="outlined" size="small" className={selectedLabel === 'confirmados' ? classes.buttonConfirm : classes.button} color="inherit" onClick={() => onSelectLabel("confirmados")}>Confimados</Button>
          <Button variant="outlined" size="small" className={selectedLabel === 'sospechosos' ? classes.buttonDead : classes.button} color="inherit" onClick={() => onSelectLabel("sospechosos")}>Descesos</Button>
        </div>
    </div>
  );
}

export default CustomizedSlider;