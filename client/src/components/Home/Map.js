import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import { HomeContext } from '../../contexts/HomeContext';
import CustomizedSlider from './Slider';
import Typography from '@material-ui/core/Typography';
import { BLACK, WHITE } from '../../constants/colors';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Map = ({classes}) => {
    const { mapRef, thresholdsNum} = React.useContext(MapContext);
    const {selectedLabel} = React.useContext(HomeContext);
    
    return (
        <div className={classes.mapContainer}>
          <div className={classes.sidebarStyle}>
            <CustomizedSlider />
          </div>
          <div className={classes.containerGradient}>
            <div className={selectedLabel === "confirmados" ? classes.colorsGradientBlue : classes.colorsGradientRed}></div>
            <div className={classes.numsWrapper}>
            <RemoveRoundedIcon className={classes.icons}/>
            {selectedLabel && thresholdsNum[selectedLabel].map((num, index) => {
              return(
                <Typography className={classes.numbers}>{num}</Typography>
              )
            })
            }
            <AddRoundedIcon className={classes.icons}/>
            </div>
          </div>
          <div ref={mapRef} className={classes.map}/>
        </div>
      );
}

const styles = () => ({
  map: {
    height: '100% !important',
  },

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

  sidebarStyle: {
      borderTop: '1px solid white',
      display: 'inline-block',
      position: 'absolute',
      left: '0',
      backgroundColor: BLACK,
      color: '#ffffff',
      zIndex: '1 !important',
      padding: '6px',
      fontWeight: 'bold',
      width: 'calc(100% - 300px)'
  },
      
  mapContainer: {
    height: 'calc(100vh - 64px)',
    flex: '2'
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
  }
});
   
  export default withStyles(styles)(Map);