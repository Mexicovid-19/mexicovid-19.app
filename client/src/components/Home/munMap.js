import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import MunicipalityData from './MunicipalityData';
import { HomeContext } from "../../contexts/HomeContext";
import MapGL, { Popup, Source, Layer, FeatureState, NavigationControl } from '@urbica/react-map-gl';
import { numberWithCommas } from '../../Utils/numberWCommas';
import LoaderView from '../Loader';
import ColorGradientBar from './ColorGradientBarMun';

const MunMap = ({classes}) => {
    const { selectedMun, geojson, fillColor, viewport, setViewport, bounds, onClick } = React.useContext(MapMunicipioContext);
    const { stateSelected, thresholdsNum} = React.useContext(MapContext);
    const { munData, selectedLabel, state } = React.useContext(HomeContext);
    const [hoveredState, setHoveredState] = React.useState(null)
    const [hoveredStateId, setHoveredStateId] = React.useState(null);

    const [lat, setLat] = React.useState(0);
    const [lng, setLng] = React.useState(0);
    
    const onHover = (event) => {
        if (event.features.length > 0) {
            const nextHoveredStateId = event.features[0].id;
            if (hoveredStateId !== nextHoveredStateId) {
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
    
    return (
        <div className={classes.container}>
            <div className={classes.containerMungraph}>
                <MunicipalityData state={stateSelected} mun={selectedMun} selectedLabel={selectedLabel}/>
            </div> 
            {!munData && 
            <div className={classes.loaderContainer}>
                <div className={classes.loader}><LoaderView/></div>
            </div>
            }
            {geojson && geojson.features.length > 0 && 
            <MapGL
                style={{ width: '100%', height: '55%' }}
                mapStyle='mapbox://styles/mildredg/ck9knxgnc1ozk1iqa5eog5o94'
                accessToken={process.env.REACT_APP_MAP_BOX_API_KEY}
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                zoom={viewport.zoom}
                onViewportChange={setViewport}
                viewportChangeMethod={'flyTo'}
            >
                <Source id='states' type='geojson' data={ geojson } />
                {fillColor && 
                <Layer
                    id='states'
                    type='fill'
                    source='states'
                    paint={{
                        'fill-color': fillColor,
                        'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.8],
                        'fill-outline-color': colors.BLACK
                    }}
                    onHover={onHover}
                    onLeave={onLeave}
                    onClick={onClick}
                />}
                {hoveredState && 
                <Popup longitude={lng} latitude={lat} closeButton={false} closeOnClick={true} maxWidth={'200px'}>
                    <div>
                        <div>
                            <span className={classes.pop}>
                                {hoveredState.NOM_MUN.toLowerCase()}
                            </span>
                            <span className={classes.pop1}>
                                <svg className={classes.pop2}>
                                    <circle r="7" cx="8" cy="9" fill={selectedLabel === 'confirmados' ? colors.BLUE : colors.RED} stroke-width="0" stroke="rgba(0, 0, 0, .5)"></circle>
                                </svg>
                                {numberWithCommas(hoveredState[ selectedLabel + "#" + state.date])} {selectedLabel}
                            </span>
                        </div>
                        <div className={classes.moreinf}>
                            Da Click para ver más.
                        </div>
                    </div>
                </Popup>}
                {hoveredStateId && <FeatureState id={hoveredStateId} source='states' state={{ hover: true }} />}
                <NavigationControl showCompass showZoom position='top-right' />
                    <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum}/>

            </MapGL>}
            
        </div>
    )
}

const styles = () => ({
    map: {
        height: '100% !important',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.BLACK
    }, 
    containerMap: {
        width: '100%',
        height: '55%',
        backgroundColor: colors.BLACK
    },
    containerMungraph: {
        width: '100%',
        height: '45%',
        backgroundColor: colors.BLACK,
        borderTop: `1px solid ${colors.WHITE}`,
        borderBottom: `1px solid ${colors.WHITE}`
    },
    topBar: {
        borderTop: `1px solid ${colors.WHITE}`,
        display: 'inline-block',
        position: 'absolute',
        left: '0',
        backgroundColor: colors.BLACK,
        color: '#ffffff',
        zIndex: '1 !important',
        padding: '6px',
        fontWeight: 'bold',
        width: '100%'
      },
    pop:{
        borderBottom: '1px solid',
        width: '100%', 
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        fontSize:'14px',
        padding: '5px',
        textTransform: 'capitalize',
    },
    pop1:{
        display: 'flex',
        fontSize:'12px',
        fontFamily: 'Raleway',
        padding: '5px',
        justifyContent: 'center',
        color: colors.GRAY_DARK,
    },
    pop2:{
        width: '18px',
        height: '18px', 
        fontFamily: 'Raleway', 
    },
    moreinf:{
        textAlign: 'right',
        fontSize: '10px',
        justifyContent: 'inherit',
    },
    colorNumsContainer: {
        minHeight: '15%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
         margin: '0px 0px 10px 0px',
    },
});
   
export default withStyles(styles)(MunMap);