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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MunMapMov = (props) => {
    const {classes} = props;
    const {openMapContainer,closeMapContainer,isMapContainer} = React.useContext(MapContext);
    console.log(openMapContainer);
    console.log(closeMapContainer);
    console.log(isMapContainer);


    return (
        <Dialog
        open={isMapContainer}
        TransitionComponent={Transition}
        keepMounted
        classes={{
            paper: classes.munContainermov, // class name, e.g. `classes-nesting-label-x`
          }}
        >
            <div className={classes.closecontainer}>
                <Button onClick={closeMapContainer}  color={colors.BLACK}>
                    <RemoveRoundedIcon/>
                </Button>
            </div>
            <div  className={classes.titlecontainer}>
                2,045
            </div>
            <div className={classes.munContainermov}>
                <div className={classes.munmapcontainer}>
                    <div>
                        <p>soy el slider </p>
                    </div>
                    <div>
                        <p>soy el mapa</p>
                    </div>
                </div>
                <div>
                    soy la grafica
                </div>
            </div>
        </Dialog>
    )
}

const styles = () => ({
    closecontainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    titlecontainer: {
        widht: '100% !important',
        height: '45px',
        display: 'flex',
        fontFamily: 'Raleway',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px'
    },
    munmapcontainer: {
        widht: '50%',
        height: '3px',
        backgroundColor: colors.GRAY,
        minWidth: '50% !important',
        display: 'flex',
        justifyContent: 'center',
    },
    
    munContainermov: {
        margin: '0px !important',
        height: '75% !important',
        bottom: '0px',
        position: 'absolute',
        borderRadius: '40px 40px 0px 0px',
        widht: '100%',
        left: '0px',
        right: '0px',
    },
});
   
export default withStyles(styles)(MunMapMov);