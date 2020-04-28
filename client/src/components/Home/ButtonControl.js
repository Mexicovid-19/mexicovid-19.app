import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as colors from '../../constants/colors';

const ButtonControl = (props) => {
    const {classes, onSelectLabel, selectedLabel } = props;
  
  return (
    <div className={classes.buttonsContainer}>
        <Button variant="outlined" size="small" className={selectedLabel === 'confirmados' ? classes.buttonConfirm : classes.button} color="inherit" onClick={() => onSelectLabel("confirmados")}>Confimados</Button>
        <Button variant="outlined" size="small" className={selectedLabel === 'decesos' ? classes.buttonDead : classes.button} color="inherit" onClick={() => onSelectLabel("decesos")}>Decesos</Button>
    </div>
  );
}

const styles = () => ({
    buttonsContainer: {
      width: '20%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    button: {
      borderRadius: '0px',
      minWidth: '120px',
      '&:hover': {
        backgroundColor: colors.BLACK,
        borderColor: colors.BLACK,
        boxShadow: 'none',
      },
    },
    buttonConfirm: {
      borderRadius: '0px',
      minWidth: '120px',
      backgroundColor: colors.BLUE,
      borderColor: colors.BLUE,
      '&:focus': {
        backgroundColor: colors.BLUE,
        borderColor: colors.BLUE,
      },
    },
    buttonDead: {
      borderRadius: '0px',
      minWidth: '120px',
      backgroundColor: colors.RED,
      borderColor: colors.RED,
      '&:focus': {
        backgroundColor: colors.RED,
        borderColor: colors.RED,
      }
    },
  [`@media (max-width: ${1000}px)`]: {
    buttonsContainer: {
      width: 'fit-content'
    }
  }
});
   
export default withStyles(styles)(ButtonControl);