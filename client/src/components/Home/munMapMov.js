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
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MunMapMov = (props) => {
    const {classes} = props;
    const {openMapContainer,closeMapContainer,isMapMunicipio,thresholdsNum} = React.useContext(MapContext);
    const {selectedLabel} = React.useContext(HomeContext);
    const { mapRef } = React.useContext(MapMunicipioContext);
    console.log(openMapContainer);
    console.log(closeMapContainer);
    console.log(isMapMunicipio);


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
                    <p>SanLuisPotosi</p>  
                </div>
            </DialogTitle>
            <DialogContent classes={{root:classes.rootDCont}}>
                <div className={classes.informationContainer}>
                    <div className={classes.munMapContainerMov}>
                        <div className={classes.nombrePobContainer}>
                            <div className={classes.pobContainer}>
                                <div><PeopleAltRoundedIcon/></div>
                                <div><p>Pob: 15,000</p></div>
                            </div>
                            <div className={classes.stateNameContainer}>
                                <svg className={classes.dotStyle}>
                                    <circle r="5" cx="6" cy="10" fill={selectedLabel === 'confirmados' ? colors.BLUE : colors.RED} stroke-width="0" stroke="rgba(0, 0, 0, .5)"></circle>
                                </svg>
                                {selectedLabel === 'confirmados' ? <p>25,000</p> : <p>1,250</p>}
                            </div>
                        </div>
                        <div className={classes.mapboxContainer}>
                            <div ref={mapRef} className={classes.map}></div>
                        </div>
                        <div className={classes.colorNumsContainer}>
                            <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />}
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
});
   
export default withStyles(styles)(MunMapMov);