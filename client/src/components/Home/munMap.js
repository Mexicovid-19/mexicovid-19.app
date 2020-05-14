import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';

const MunMap = ({classes}) => {
    return (
        <div className={classes.container}>

        </div>
    )
}

const styles = () => ({
  container: {
      width: '100%',
      height: '50%',
      backgroundColor: colors.BLACK
  }
});
   
export default withStyles(styles)(MunMap);