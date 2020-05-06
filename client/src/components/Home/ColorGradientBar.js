import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BLACK, WHITE } from '../../constants/colors';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const ColorGradientBar = (props) => {
	const { classes, thresholdsNum, selectedLabel } = props;
  
  return (
    <div className={classes.containerGradient}>
      <div className={selectedLabel === "confirmados" ? classes.colorsGradientBlue : classes.colorsGradientRed}></div>
      <div className={classes.numsWrapper}>
        <RemoveRoundedIcon className={classes.icons}/>
          {selectedLabel && thresholdsNum[selectedLabel].map((num, index) => {
            return(
              <Typography className={classes.numbers}>{num}</Typography>
            )})
          }
        <AddRoundedIcon className={classes.icons}/>
      </div>
    </div>
  );
}

const styles = () => ({
  icons: {
    color: WHITE,
    fontSize: '16px'
  },

  colorsGradientRed: {
    background: 'linear-gradient(to right, #fff5f0,#fee0d2,#fcbba1,#fc9272,#fb6a4a,#ef3b2c,#cb181d,#99000d)',
    height: '10px',
    width: '100%',
    position: 'absolute'
  },

  colorsGradientBlue: {
    background: 'linear-gradient(to right, #f7fbff,#deebf7,#c6dbef,#9ecae1,#6baed6,#4292c6,#2171b5,#084594)',
    height: '10px',
    width: '100%',
    position: 'absolute'
  },

  containerGradient: {
    width: '300px',
    position: 'absolute',
    bottom: '0px',
    zIndex: '10',
    backgroundColor: BLACK
  },
    
  numsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '10px'
  },

  numbers: {
    color: '#fff',
    fontSize: '12px'
  },

  [`@media (max-width: ${1000}px)`]: {
    containerGradient: {
      position: 'inherit',
      width: '100%',
    }
  }

});
   
export default withStyles(styles)(ColorGradientBar);