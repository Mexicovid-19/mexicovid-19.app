import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import CustomizedSlider from './Slider';

const Map = ({classes}) => {
    const {stateMap, mapRef} = React.useContext(MapContext);
    const {lat, lng, zoom} = stateMap;
    
    
    return (
        <div className={classes.mapContainer}>
          <div className={classes.sidebarStyle}>
            <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            <CustomizedSlider/>
          </div>
          <div ref={mapRef} className={classes.map} />
        </div>
      );
}

const styles = () => ({
    map: {
      height: '100% !important'
    },

    sidebarStyle: {
        display: 'inline-block',
        position: 'absolute',
        top: '50px',
        left: '0',
        margin: '12px',
        backgroundColor: '#404040',
        color: '#ffffff',
        zIndex: '1 !important',
        padding: '6px',
        fontWeight: 'bold',
    },
        
    mapContainer: {
      height: '89vh'
    }
  });
   
  export default withStyles(styles)(Map);