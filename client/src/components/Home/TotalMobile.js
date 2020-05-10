import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as colors from '../../constants/colors';

import { HomeContext } from '../../contexts/HomeContext';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { MONTHS } from '../../constants/date';
import Slider from './Slider';
import ButtonControl from './ButtonControl';
import { numberWithCommas } from '../../Utils/numberWCommas'


const TotalMobile = (props) => {
  const {classes, onSelectLabel, selectedLabel } = props;
  const {state, changeDate, dataChart } = React.useContext(HomeContext);
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

  return (
    <div className={classes.buttonsContainer}>
    <Typography className={classes.text}>Totales:</Typography>
      <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotConfirm}/>{numberWithCommas(totalDeads)}</Typography>
      <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotDeads}/>{numberWithCommas(totalConfirm)}</Typography>
    </div>
  );
}

const styles = () => ({
  buttonsContainer: {
    width: '100% !important',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:'1rem',
    paddingBottom:'1rem'
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

  [`@media (max-width: ${1000}px)`]: {
    buttonsContainer: {
      width: 'fit-content'
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
  
});
   
export default withStyles(styles)(TotalMobile);