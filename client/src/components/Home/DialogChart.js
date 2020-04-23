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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) => {
  const { classes, handleClose, open, data} = props;
  return (
    <div>
      <Dialog
        classes={{paperWidthSm: classes.DContent}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <Typography> Grafica de Casos</Typography>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
        <DialogContent >
          <MyResponsiveLine data={data} isSmall={false}/>
        </DialogContent>
      </Dialog> 
    </div>
  );
};

  
const styles = (thme) => ({
  DContent: {
    height: '80% !important',
    width: '80% !important' ,
  },
  root: {
    margin: 0
  },
});


export default withStyles(styles)(AlertDialogSlide);