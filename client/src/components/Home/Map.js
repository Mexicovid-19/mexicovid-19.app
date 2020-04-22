import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import CustomizedSlider from './Slider';
import Typography from '@material-ui/core/Typography';
import { BLACK } from '../../constants/colors';

const Map = ({classes}) => {
    const {stateMap, mapRef, thresholdsNum} = React.useContext(MapContext);
    const {zoom} = stateMap;
    
    return (
        <div className={classes.mapContainer}>
          <div className={classes.sidebarStyle}>
            <CustomizedSlider/>
          </div>
          <div className={classes.containerGradient}>
            <div className={classes.colorsGradient}></div>
            <div className={classes.numsWrapper}>
            {thresholdsNum["confirm"].map((num, index) => {
              let text = num;
              if(index == 0) {
                text = '-' + num;
              } else if(index == thresholdsNum["confirm"].length - 1) {
                text = '+' + num;
              }

              return(
                <Typography className={classes.numbers}>{text}</Typography>
              )
              
            })
            }
            </div>
          </div>
          <div ref={mapRef} className={classes.map} />
        </div>
      );
}

const styles = () => ({
    map: {
      height: '100% !important',
    },

    colorsGradient: {
      background: 'linear-gradient(to right, #fff5f0,#fee0d2,#fcbba1,#fc9272,#fb6a4a,#ef3b2c,#cb181d,#99000d)',
      height: '5px',
      width: '100%',
      position: 'absolute'
    },

    containerGradient: {
      width: '300px',
      position: 'absolute',
      bottom: '0px',
      marginBottom: '100px',
      zIndex: '1',
    },

    sidebarStyle: {
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
      height: '89vh',
      flex: '2'
    },

    numsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    numbers: {
      color: '#fff'
    }
  });
   
  export default withStyles(styles)(Map);