import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import MyResponsiveLine from './LineChart';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { themeBlack } from '../../constants/themeBlack';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  const { classes, handleClose, open, data} = props;
  const [maxWidth, setMaxWidth] = React.useState('lg');
  return (
    <div>
      <Dialog
        maxWidth={maxWidth}
        classes={{paperWidthLg: classes.DContent}} 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <Button onClick={handleClose} classes={{root: classes.cross}}>
          <CloseIcon />
        </Button>
        <Typography className={classes.title}> Grafica de Casos</Typography>
        <DialogContent classes={{root: classes.chartatyle}}>
          <MyResponsiveLine data={data} isSmall={false}  />
        </DialogContent>
      </Dialog> 
    </div>
  );
};

  
const styles = (thme) => ({
  DContent: {
    height: '90% !important',
    width: '100% !important' ,
    background: '#222222' 
  },
  root: {
    margin: 0
  },
  title: {
    textAlign: 'center',
    color: 'white',
    paddingTop: '10px',
  },
  chartatyle: {
    paddingLeft: '50px',
    paddingRight: '60px',
    paddingBottom: '50px'
  },
  cross: {
    right: '0px',
    position: 'absolute',
    color: 'white'
  }
});


export default withStyles(styles)(AlertDialogSlide);