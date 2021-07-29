import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import * as colors from '../../constants/colors';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
      '&:active':{
        backgroundColor: "#4AA461",
      }
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function BackTo({onClick1},{index}) {
  const classes = useStyles();
  var num=index;
  if (num<=4 && 1<num){
  return (
    <div>
        <IconButton onClick={onClick1} aria-label="ArrowBack" color="primary">
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
    </div>
  );}
  else if(num<=1){
    return (
        <div>
            <IconButton onClick={onClick1} aria-label="ArrowBack" disabled >
              <ArrowBackIosIcon fontSize="large"/>
            </IconButton>
        </div>
      );
  }
}