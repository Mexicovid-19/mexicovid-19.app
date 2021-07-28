import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import * as colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  root: {
      '&:active':{
        backgroundColor: "#4AA461",
      }
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ForwardTo({index}) {
  const classes = useStyles();
  var num=index;
  if (num<4 && 1<=num){
  return (
    <div>
        <IconButton aria-label="ArrowForward" color="primary">
          <ArrowForwardIos fontSize="large" />
        </IconButton>
    </div>
  );}
  else if(4<=num){
    return (
        <div>
            <IconButton aria-label="ArrowForward" disabled >
              <ArrowForwardIos fontSize="large"/>
            </IconButton>
        </div>
      );
  }
}