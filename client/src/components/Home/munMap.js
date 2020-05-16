import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import Typography from '@material-ui/core/Typography';

const MunMap = ({classes}) => {
    const { mapRef, selectedMun } = React.useContext(MapMunicipioContext);
    const { stateSelected } = React.useContext(MapContext);
    
    return (
        <div className={classes.container}>
            <div className={classes.containerMap}>   
                <div className={classes.topBar}>
                    <Typography align={'left'}>
                        {stateSelected.nombre} | {selectedMun}
                    </Typography>
                </div>  
                <div ref={mapRef} className={classes.map}></div>
            </div>
            <div className={classes.containerMungraph}>
            </div>        
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
        height: '60%',
        backgroundColor: colors.BLACK
    },
    containerMungraph: {
        width: '100%',
        height: '40%',
        backgroundColor: colors.BLUE
    },
    topBar: {
        borderTop: '1px solid white',
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
});
   
export default withStyles(styles)(MunMap);