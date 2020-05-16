import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as colors from '../../constants/colors';

const MunMap = (props) => {
    const {classes} = props;

    return (
        <div className={classes.container}>
            <div className={classes.containermap}> 
            </div>
            <div className={classes.containermungraph}>
            </div>        
        </div>
    )
}

const styles = () => ({
    container: {
        width: '100%',
        height: '100%',
    }, 
    containermap: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.BLACK
    },
    containermungraph: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.BLUE
    }
});
   
export default withStyles(styles)(MunMap);