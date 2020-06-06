import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';
import { MapContext } from '../../contexts/MapContext';
import Typography from '@material-ui/core/Typography';
import MunicipalityData from './MunicipalityData';
import { HomeContext } from "../../contexts/HomeContext";

const MunMap = ({classes}) => {
    const { mapRef, selectedMun } = React.useContext(MapMunicipioContext);
    const { stateSelected } = React.useContext(MapContext);
    const { munData } = React.useContext(HomeContext);
    
    return (
        <div className={classes.container}>
            <div className={classes.containerMungraph}>
                <MunicipalityData state={stateSelected} mun={munData}/>
            </div> 
            <div className={classes.containerMap}>   
                <div ref={mapRef} className={classes.map}></div>
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
});
   
export default withStyles(styles)(MunMap);