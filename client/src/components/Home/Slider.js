import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { HomeContext } from '../../contexts/HomeContext';
import Typography from '@material-ui/core/Typography';
import { MONTHS } from '../../constants/date';
import * as colors from '../../constants/colors';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

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

const useStyles = makeStyles((theme) => ({
  slider: {
    width: '20%'
  },
  text: {
    display: 'flex',
    margin: '0px 10px',
    letterSpacing: '2px',
    flexDirection: 'row',
    alignItems: 'center',
	},
	[`@media (max-width: ${1000}px)`]: {
    slider: {
      width: '100%',
			display: 'flex',
			marginTop: '10px',
			marginBottom: '10px',
			justifyContent: 'center'
    }
  }
}));

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
	[`@media (max-width: ${1000}px)`]: {
    root: {
      width: '70vw',
    }
  }
})(Slider);

const CustomizedSlider = () => {
	const classes = useStyles();
	const {state, changeDate, dataChart} = React.useContext(HomeContext);
  let max = 0;
  let totalConfirm = 0;
  let totalDeads = 0;

	if(!state.dates) {
		return null;
  }

  if(dataChart.length > 0) {
    totalConfirm = dataChart[0].data.find((x) => { return x.x === state.date }).y;
    totalDeads = dataChart[1].data.find((x) => { return x.x === state.date }).y;
  }
	
  max = state.dates.length - 1;
  let formatedDate = new Date(state.date);
  formatedDate = `${formatedDate.getDate()} de ${MONTHS[formatedDate.getMonth()]}, 2020`;
  
  return (
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
  );
}

export default CustomizedSlider;