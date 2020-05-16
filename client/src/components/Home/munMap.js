import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';

const MunMap = ({classes}) => {
    const { mapRef } = React.useContext(MapMunicipioContext);
    
    return (
        <div className={classes.container}>
            <div className={classes.containerMap}>     
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
        height: '50%',
        backgroundColor: colors.BLACK
    },
    containerMungraph: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.BLUE
    }
});
   
export default withStyles(styles)(MunMap);