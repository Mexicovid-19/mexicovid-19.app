import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import CustomizedSlider from './Slider';
import { BROWN } from '../../constants/colors';

const Map = ({classes}) => {
    const {stateMap, mapRef} = React.useContext(MapContext);
    const {zoom} = stateMap;
    
    return (
        <div className={classes.mapContainer}>
          <div className={classes.sidebarStyle}>
            <CustomizedSlider/>
          </div>
          <div ref={mapRef} className={classes.map} />
        </div>
      );
}

const styles = () => ({
    map: {
      height: '100% !important',
    },

    sidebarStyle: {
        display: 'inline-block',
        position: 'absolute',
        left: '0',
        backgroundColor: BROWN,
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