import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { HomeContext } from '../../contexts/HomeContext';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { numberWithCommas } from '../../Utils/numberWCommas';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import Slider from './Slider';
import ButtonControl from './ButtonControl';
import { MONTHS } from '../../constants/date';

const TotalMobile = (props) => {
  const {classes } = props;
  const {state,  dataChart, onSelectLabel, selectedLabel} = React.useContext(HomeContext);
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  let totalConfirm = 0;
  let totalDeads = 0;
  let formatedDate = "";

  if( state.date ) {
    formatedDate = new Date(state.date);
    formatedDate = `${formatedDate.getDate()} de ${MONTHS[formatedDate.getMonth()]}`;
  }
  
  let expandHandler = () => {
    setIsExpanded(!isExpanded);
  }

  if(dataChart.length > 0) {
    totalConfirm = dataChart[1].data.find((x) => { return x.x === state.date }).y;
    totalDeads = dataChart[0].data.find((x) => { return x.x === state.date }).y;
  }
  
  return (
    <React.Fragment>
    <div className={classes.buttonsContainer}>
      <Typography className={classes.text}>{formatedDate}</Typography>
      |
      <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotConfirm}/>{numberWithCommas(totalConfirm)}</Typography>
      <Typography className={classes.text}><FiberManualRecordTwoToneIcon className={classes.dotDeads}/>{numberWithCommas(totalDeads)}</Typography>
      {isExpanded
            ? <ExpandLessRoundedIcon onClick={expandHandler} className={classes.expandIcon} />
            : <ExpandMoreRoundedIcon onClick={expandHandler} className={classes.expandIcon} />}
    </div>
    {isExpanded &&
      <div className={classes.control}>
        <Slider/>
        <ButtonControl onSelectLabel={onSelectLabel} selectedLabel={selectedLabel}/>
      </div>
    } 
    </React.Fragment>
  );
}

const styles = () => ({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '10px 0'
  },
  control: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
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