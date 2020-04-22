import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import CustomizedSlider from './Slider';
import { BLACK } from '../../constants/colors';

const Map = ({classes}) => {
    const {stateMap, mapRef} = React.useContext(MapContext);
    const {zoom} = stateMap;
    
    return (
        <div className={classes.mapContainer}>
          <div className={classes.sidebarStyle}>
            <CustomizedSlider/>
            <div className={classes.colorsGradient}></div>
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
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
    }
  });
   
  export default withStyles(styles)(Map);