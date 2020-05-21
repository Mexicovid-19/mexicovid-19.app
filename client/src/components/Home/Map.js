import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import { HomeContext } from '../../contexts/HomeContext';
import CustomizedSlider from './CustomizedSlider';
import { BLACK, WHITE, BLUE } from '../../constants/colors';
import ColorsGradientBar from './ColorGradientBar';
import LoaderView from '../Loader';
import MunMap from './munMap';
import MunMapMov from './munMapMov';
import MapGL, { Popup, Source, Layer, FeatureState, NavigationControl } from '@urbica/react-map-gl';
import { numberWithCommas } from '../../Utils/numberWCommas';

const Map = ({classes}) => {
  const { mapRef, thresholdsNum, isMapMunicipio, geojson,statesGeOJSON, fillColor, setStateSelected, setIsMapMunicipio} = React.useContext(MapContext);
  const {selectedLabel, isMap, stateData, state} = React.useContext(HomeContext);
  const [hoveredState, setHoveredState] = React.useState(null)
  const [hoveredStateId, setHoveredStateId] = React.useState(null);

  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);
  const [viewport, setViewport] = React.useState({
    longitude: -100.8116,
    latitude: 24.6040,
    zoom: 3.2
  });

  const onClick = (event) => {
    if (event.features.length > 0) {
      let cve_ent = String(event.features[0].properties.CVE_ENT);
      let nombre = event.features[0].properties.ESTADO;
      cve_ent = cve_ent.length == 1 ? "0" + cve_ent : cve_ent;
      setStateSelected(
        {
          cve_ent,
          nombre: nombre.slice(0,1) + nombre.slice(1).toLowerCase(),
          abrev: event.features[0].properties.ABREV
        }
      );
    }
    
    setIsMapMunicipio(true);
  }

  const onHover = (event) => {
    console.log(event)
    if (event.features.length > 0) {
      const nextHoveredStateId = event.features[0].id;
      if (hoveredStateId !== nextHoveredStateId) {
        console.log(hoveredStateId)
        setHoveredStateId(nextHoveredStateId);
      }

      const _hoveredState = event.features[0].properties;
      if (  _hoveredState !== hoveredState) {
        setLat(event.lngLat.lat);
        setLng(event.lngLat.lng);
        setHoveredState(_hoveredState);
      }
    }
  };
  
  const onLeave = () => {
    if (hoveredStateId) {
      setHoveredStateId(null);
    }

    if (hoveredState) {
      setHoveredState(null);
    }
  };

  let isMobile = window.innerWidth < 1000;
  
  return (
    <div className={isMap ? classes.show : classes.mapContainer}>
      {!stateData && 
        <div className={classes.loaderContainer}>
          <div className={classes.loader}><LoaderView/></div>
        </div>
      }
      <div className={classes.sidebarStyle}>
        {!isMobile && <CustomizedSlider />}
      </div>
      {isMapMunicipio && !isMobile ? 
        <div className={classes.munContainer}>
          <MunMap/>
        </div> 
        :
          <MunMapMov/>
        }
      {!isMobile && <ColorsGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />}
      {geojson && geojson.features.length == 32 && <MapGL
        style={{ width: '100%', height: '100%' }}
        mapStyle='mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko'
        accessToken={process.env.REACT_APP_MAP_BOX_API_KEY}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        <Source id='states' type='geojson' data={ geojson } />
        {fillColor && <Layer
          id='states'
          type='fill'
          source='states'
          paint={{
            'fill-color': fillColor,
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.8],
            'fill-outline-color': '#FFF'
          }}
          onHover={onHover}
          onLeave={onLeave}
          onClick={onClick}
        />}
        {hoveredState && <Popup longitude={lng} latitude={lat} closeButton={true} closeOnClick={true}>
            <div>
              <div>
              {hoveredState.ESTADO}
              {numberWithCommas(hoveredState[ selectedLabel + "#" + state.date])} {selectedLabel} 
              </div>
            </div>
        </Popup>}
        {hoveredStateId && <FeatureState id={hoveredStateId} source='states' state={{ hover: true }} />}
        <NavigationControl showCompass showZoom position='bottom-right' />
        </MapGL>};
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
    width: 'calc(50vw - 300px)',
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