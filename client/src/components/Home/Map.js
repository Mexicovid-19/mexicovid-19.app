import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import { HomeContext } from '../../contexts/HomeContext';
import CustomizedSlider from './CustomizedSlider';
import { BLACK, WHITE } from '../../constants/colors';
import ColorsGradientBar from './ColorGradientBar';
import LoaderView from '../Loader';
import MunMap from './munMap';

const Map = ({classes}) => {
  const { mapRef, thresholdsNum, isMapContainer} = React.useContext(MapContext);
  const {selectedLabel, isMap, statesConfirm} = React.useContext(HomeContext);
  
  let isMobile = window.innerWidth < 1000;
  return (
    <div className={isMap ? classes.show : classes.mapContainer}>
      {!statesConfirm && 
        <div className={classes.loaderContainer}>
          <div className={classes.loader}><LoaderView/></div>
        </div>
      }
      <div className={classes.sidebarStyle}>
        {!isMobile && <CustomizedSlider />}
      </div>
      {isMapContainer && 
      <div className={classes.munContainer}>
        <MunMap/>
      </div>}
      {!isMobile && <ColorsGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />}
      <div ref={mapRef} className={classes.map}></div>
    </div>
  );
}

const styles = () => ({
  map: {
    height: '100% !important',
  },

  show: {
    flex: '2'
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
  },

  loaderContainer: {
    position: 'absolute',
    zIndex: '100',
    right: 'auto',
    display: 'flex',
    height: 'inherit',
    width: 'calc(100% - 300px)',
  },

  loader: {
    width: 'fit-content',
    margin: 'auto',
  },

  munContainer: {
    height: 'calc(100vh - 125px)',
    width: '300px',
    position: 'absolute',
    backgroundColor: WHITE,
    zIndex: '10',
    right: '300px',
    top: '125px',
  },

  [`@media (max-width: ${1000}px)`]: {
    mapContainer: {
      display: 'none'
    },
    show: {
      display: 'block'
    },
    sidebarStyle: {
      display: 'none'
    },
    map: {
      height: 'calc(100vh - 170px) !important',
    },
  }
  
});
   
export default withStyles(styles)(Map);