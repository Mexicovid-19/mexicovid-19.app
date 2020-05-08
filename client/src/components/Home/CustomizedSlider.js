import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HomeContext } from '../../contexts/HomeContext';
import * as colors from '../../constants/colors';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { MONTHS } from '../../constants/date';
import Slider from './Slider';
import ButtonControl from './ButtonControl';
import { numberWithCommas } from '../../Utils/numberWCommas'

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
    totalConfirm = dataChart[0].data.find((x) => { return x.x === state.date }).y;
    totalDeads = dataChart[1].data.find((x) => { return x.x === state.date }).y;
  }
	
  max = state.dates.length - 1;
  let formatedDate = new Date(state.date);
  formatedDate = `${formatedDate.getDate()} de ${MONTHS[formatedDate.getMonth()]}, 2020`;
  
  return (
    <div className={classes.container} >
      <Slider/>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>{formatedDate} | Totales:</Typography>
        <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotConfirm}/> {numberWithCommas(totalConfirm)} </Typography>
        <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotDeads}/> {numberWithCommas(totalDeads)} </Typography>
      </div>
      <ButtonControl onSelectLabel={onSelectLabel} selectedLabel={selectedLabel}/>
    </div>
  );
}

export default CustomizedSlider;