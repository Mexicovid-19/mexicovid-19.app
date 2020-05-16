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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MunMapMov = (props) => {
    const {classes} = props;
    const {openMapContainer,closeMapContainer,isMapContainer,selectedLabel,thresholdsNum} = React.useContext(MapContext);
    console.log(openMapContainer);
    console.log(closeMapContainer);
    console.log(isMapContainer);


    return (
        <Dialog
        open={isMapContainer}
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
            <DialogTitle>
                <div className={classes.closecontainer}>
                    <Button onClick={closeMapContainer}  classes={{root:classes.rootbutton}} color={colors.BLACK}>
                        <RemoveRoundedIcon fontSize={'large'}/>
                    </Button>
                </div>
                <div  className={classes.titlecontainer}>
                    <svg className={classes.dotstyle}>
                        <circle r="5" cx="6" cy="10" fill={selectedLabel === 'confirmados' ? colors.BLUE : colors.RED} stroke-width="0" stroke="rgba(0, 0, 0, .5)"></circle>
                    </svg>
                    {selectedLabel === 'confirmados' ? <p>25,000</p> : <p>1,250</p>}
                </div>
            </DialogTitle>
            <DialogContent classes={{root:classes.rootdiagcont}}>
                <div className={classes.boxmaxgrapcontainer}>
                    <div className={classes.munmapContainermov}>
                        <div className={classes.mapboxcontainer}>
                            <p>ESNAUSER </p>
                        </div>
                        <div className={classes.namestatemuncontainer}>
                            <p>San Luis Potosi</p>
                        </div>
                        <div className={classes.slidermuncontainer}>
                            <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />}
                        </div>
                    </div> 
                    <div className={classes.mungraphContainermov}>
                        <div className={classes.graphmun}>
                            <p></p> 
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
    closecontainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    rootbutton:{
        width: '20%',
    },
    titlecontainer: {
        height: '45px',
        display: 'flex',
        fontFamily: 'Raleway',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
    },
    dotstyle:{
        width: '15px', 
        height: '15px', 
        fontFamily: 'Raleway', 
        fontWeight: 'bold',
    },
    rootdiagcont:{
        padding: 'inherit !important',
    },
    boxmaxgrapcontainer: {
        height: '1000px',
        display: 'table',
        width: '100%',
        margin: '0px',
    },
    
    munmapContainermov: {
        height: '60% !important',
        display: 'flow-root',
    },
    mapboxcontainer: {
        minHeight: '75%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'aqua',
        border: 'solid', 
    },
    namestatemuncontainer: {
        minHeight: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'aqua',
        border: 'solid',
    },
    slidermuncontainer: {
        minHeight: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'aqua',
        border: 'solid',
    },
    mungraphContainermov: {
        height: '40% !important',
        display: 'flow-root',
    },
    graphmun: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'aqua',
        border: 'solid',
    },
});
   
export default withStyles(styles)(MunMapMov);