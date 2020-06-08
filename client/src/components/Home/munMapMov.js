import React, { Component, useRef, useEffect } from 'react';
import { render } from 'react-dom'
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../../contexts/MapContext';
import * as colors from '../../constants/colors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import ColorGradientBar from './ColorGradientBarMun';
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
    const {closeMapContainer,isMapMunicipio} = React.useContext(MapContext);
    const { mapRef } = React.useContext(MapMunicipioContext);
    const { selectedMun, geojson, fillColor, viewport, setViewport, bounds, onClick,thresholdsNum} = React.useContext(MapMunicipioContext);
    const { stateSelected } = React.useContext(MapContext);
    const { selectedLabel, state } = React.useContext(HomeContext);
    const [hoveredState, setHoveredState] = React.useState(null)
    const [hoveredStateId, setHoveredStateId] = React.useState(null);


    const diagRef = useRef(null);
    const posRef = useRef(null);
    const [lat, setLat] = React.useState(0);
    const [lng, setLng] = React.useState(0);
    
    const scrollToRef = (ref) => diagRef.current.scrollTo(0, ref.current.offsetTop-200)   

    const onClickpos = (event) => {
        onClick(event);
        scrollToRef(posRef);
        console.log(posRef.current)
        console.log(diagRef.current)
    }

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
        maxWidth={'lg'}
        >
            <DialogTitle classes={{root: classes.rootDTitle}}>
                <div className={classes.closeContainer}>
                    <Button onClick={closeMapContainer}  classes={{root:classes.rootButton}} color={colors.BLACK}>
                        <RemoveRoundedIcon fontSize={'large'}/>
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent classes={{root:classes.rootDCont}} ref={diagRef}>
                <div className={classes.informationContainer}>
                    <div className={classes.infocontainer} ref={posRef}>
                        <MunicipalityDataMov state={stateSelected} mun={selectedMun} selectedLabel={selectedLabel}/>
                    </div> 
                    <div className={classes.munGraphContainerMov}>
                        <div className={classes.graphmun}> 
                        </div>
                    </div> 
                    <div className={classes.munMapContainerMov}>
                        <div className={classes.mapboxContainer}>
                                <MapGL
                                    style={{ width: '95%', height: '100%', borderRadius: '10px' }}
                                    mapStyle='mapbox://styles/mildredg/cka6jvxnt0mpf1ilh5krfkxlw'
                                    accessToken={process.env.REACT_APP_MAP_BOX_API_KEY}
                                    latitude={viewport.latitude}
                                    longitude={viewport.longitude}
                                    zoom={viewport.zoom+.5}
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
                                        onClick={onClickpos}
                                    />}
                                    <NavigationControl showCompass showZoom position='top-right' />
                                </MapGL>
                        </div>
                        <div className={classes.colorNumsContainer}>
                            <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum}/>
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
        height: '830px',
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
        height: '400px',
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
        height: '0% !important',
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