import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';
import { MapMunicipioContext } from '../../contexts/MapMunicipioContext';

const MunMap = ({classes}) => {
    const { mapRef } = React.useContext(MapMunicipioContext);
    
    return (
        <div className={classes.container}>
            <div ref={mapRef} className={classes.map}></div>
        </div>
    )
}

const styles = () => ({
  container: {
      width: '100%',
      height: '50%',
      backgroundColor: colors.BLACK
  },
  map: {
    height: '100% !important',
  },
});
   
export default withStyles(styles)(MunMap);