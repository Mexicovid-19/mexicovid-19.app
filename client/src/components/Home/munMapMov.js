import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import * as colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import ColorGradientBar from './ColorGradientBar';
import { HomeContext } from '../../contexts/HomeContext';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import MunicipalityDataMov from './MunicipalityDataMov';
import MapGL, { Popup, Source, Layer, FeatureState, NavigationControl } from '@urbica/react-map-gl';
import { numberWithCommas } from '../../Utils/numberWCommas';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MunMapMov = (props) => {
    const {classes} = props;
    const {closeMapContainer,isMapMunicipio,thresholdsNum} = React.useContext(MapContext);
    const { mapRef } = React.useContext(MapMunicipioContext);
    const { selectedMun, geojson, fillColor, viewport, setViewport, bounds } = React.useContext(MapMunicipioContext);
    const { stateSelected } = React.useContext(MapContext);
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
    console.log(stateSelected);
    
    return (
        <Dialog
        open={isMapMunicipio}
        TransitionComponent={Transition}
        keepMounted
        classes={{
            root: classes.root, // class name, e.g. `root-x`
            paper: classes.paper,
            scrollPaper: classes.scrollPaper
        }}
        hideBackdrop = {true}
        disableBackdropClick={true}
        >
            <DialogTitle classes={{root: classes.rootDTitle}}>
                <div className={classes.closeContainer}>
                    <Button onClick={closeMapContainer}  classes={{root:classes.rootButton}} color={colors.BLACK}>
                        <RemoveRoundedIcon fontSize={'large'}/>
                    </Button>
                </div>
                <div  className={classes.titleContainer}>
                    {stateSelected.nombre} 
                </div>
            </DialogTitle>
            <DialogContent classes={{root:classes.rootDCont}}>
                <div className={classes.informationContainer}>
                    <div className={classes.infocontainer}>
                        <MunicipalityDataMov state={stateSelected} mun={munData} selectedLabel={selectedLabel}/>
                    </div> 
                    <div className={classes.munMapContainerMov}>
                        <div className={classes.mapboxContainer}>
                                <MapGL
                                    style={{ width: '95%', height: '100%', borderRadius: '10px' }}
                                    mapStyle='mapbox://styles/mildredg/cka6jvxnt0mpf1ilh5krfkxlw'
                                    accessToken={process.env.REACT_APP_MAP_BOX_API_KEY}
                                    latitude={viewport.latitude}
                                    longitude={viewport.longitude}
                                    zoom={viewport.zoom}
                                    onViewportChange={setViewport}
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
                                    />}
                                    {hoveredState && 
                                    <Popup longitude={lng} latitude={lat} closeButton={false} closeOnClick={true} maxWidth={'600px'}>
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
                                </MapGL>
                        </div>
                        <div className={classes.colorNumsContainer}>
                            <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />
                        </div>
                    </div> 
                    <div className={classes.munGraphContainerMov}>
                        <div className={classes.graphmun}>
                            <p>UNA GRAFICA MUY PADRE</p> 
                        </div>
                    </div> 
                </div>
            </DialogContent>    
        </Dialog>
    )
}

const styles = () => ({
    root:{
        right: 'inherit !important',
        bottom: 'inherit !important',
        left: 'inherit !important;',
        top: '180px !important',
        width: '100% !important',
        margin: '0',
    },
    paper:{
        margin: '0px !important',
        height: '-webkit-fill-available',
        borderRadius: '50px 50px 0px 0px !important',
    },
    scrollPaper:{
        display: 'inherit !important'
    },
    rootDTitle:{
        padding: '0px 0px 12px 0px',
    },
    closeContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    rootButton:{
        width: '20%',
    },
    titleContainer: {
        height: '45px',
        display: 'flex',
        fontFamily: 'Raleway',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
    },
    rootDCont:{
        padding: 'inherit !important',
    },
    informationContainer: {
        height: '1000px',
    },  
    munMapContainerMov: {
        display: 'flow-root',
    },
    nombrePobContainer: {
        minHeight: '15%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Raleway',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        margin: '10px 0px',
	    alignItems: 'stretch',
    },
    pobContainer:{
        fontSize: '20px',
        fontFamily: 'Raleway',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
    },
    stateNameContainer:{
        fontSize: '35px',
        fontFamily: 'Raleway',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
    },
    dotStyle:{
        width: '15px', 
        height: '15px', 
        fontFamily: 'Raleway', 
        fontWeight: 'bold',
    },
    mapboxContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '450px',
        backgroundColor: '#dadfdf',
    },
    map:{
        height: '350px',
        width: '80%',
    },
    colorNumsContainer: {
        minHeight: '15%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
         margin: '0px 0px 10px 0px',
    },
    munGraphContainerMov: {
        height: '30% !important',
        display: 'flow-root',
    },
    graphmun: {
        borderColor: 'aqua',
        border: 'solid',
        height: '370px',
        display: 'flex',
	    flexDirection: 'column',
	    flexWrap: 'nowrap',
	    justifyContent: 'center',
	    alignItems: 'center',
	    alignContent: 'stretch',
    },
    infocontainer: {
        width: '100%',
        backgroundColor: colors.WHITE,
        borderTop: `1px solid ${colors.WHITE}`,
        borderBottom: `1px solid ${colors.WHITE}`
    },
});
   
export default withStyles(styles)(MunMapMov);