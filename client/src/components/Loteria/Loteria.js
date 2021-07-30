import React, {useState } from 'react'
/* Material UI */
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Header from '../Header';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
/* Utils */
import * as colors from '../../constants/colors';
import estadosMexicanos from './estados/estados.json';
/* Components */
import {NewCard} from './NuevaTarjeta';
import SimplePopper from './PopperCard';
import BackTo from './BackTo';
import ForwardTo from './ForwardTo';
import NationalGraph from './NationalGraph';
/*import { aguascalientes, aguascalientes } from './estados/estados';*/

const estados = estadosMexicanos;

const dataCasos = [{
  "id": "Casos Confirmados",
  "color": "hsl(25, 87%, 57%)",
  "data":[
      {
        "x": "01/06/21",
        "y": 2767
      },
      {
        "x": "02/06/21",
        "y": 2783
      },
      {
        "x": "03/06/21",
        "y": 2632
      },
      {
        "x": "04/06/21",
        "y": 2744
      },
      {
        "x": "05/06/21",
        "y": 1344
      },
      {
        "x": "06/06/21",
        "y": 836
      },
      {
        "x": "07/06/21",
        "y": 3649
      },
      {
        "x": "08/06/21",
        "y": 3556
      },
      {
        "x": "09/06/21",
        "y": 3351
      },
      {
        "x": "10/06/21",
        "y": 3228
      },
      {
        "x": "11/06/21",
        "y": 3310
      },
      {
        "x": "12/06/21",
        "y": 1699
      },
      {
        "x": "13/06/21",
        "y": 1090
      },
      {
        "x": "14/06/21",
        "y": 4137
      },
      {
        "x": "15/06/21",
        "y": 3829
      },
      {
        "x": "16/06/21",
        "y": 3902
      },
      {
        "x": "17/06/21",
        "y": 3898
      },
      {
        "x": "18/06/21",
        "y": 3920
      },
      {
        "x": "19/06/21",
        "y": 2038
      },
      {
        "x": "20/06/21",
        "y": 1261
      },
      {
        "x": "21/06/21",
        "y": 5215
      },
      {
        "x": "22/06/21",
        "y": 5095
      },
      {
        "x": "23/06/21",
        "y": 5215
      },
      {
        "x": "24/06/21",
        "y": 5229
      },
      {
        "x": "25/06/21",
        "y": 5138
      },
      {
        "x": "26/06/21",
        "y": 2704
      },
      {
        "x": "27/06/21",
        "y": 1655
      },
      {
        "x": "28/06/21",
        "y": 6808
      },
      {
        "x": "29/06/21",
        "y": 6299
      },
      {
        "x": "30/06/21",
        "y": 6069
      }
     ] 
}]






const LoteriaPag = ({ classes }) => {
const [graphData, setGraphData] = React.useState({
  nationalData: dataCasos,
});
  const isMobile = window.innerWidth < 1000;
  const [value, setValue] = React.useState(3);
  const [showing, setShowing] = React.useState(false);
  const [indexButton, setIndexButton]= React.useState({
    index: 1,
    carta1:1,
    carta2: 2,
    carta3: 3,
    carta4: 4,
    carta5: 5,
    carta6: 6,
    carta7: 7,
    carta8: 8,
    carta9: 9,
  });

  const handleChangeBack = () => {
    var guia = indexButton.index
    if( 1<guia){
      setIndexButton(
        {
          index: indexButton.index-1,
          carta1:indexButton.carta1-9,
          carta2: indexButton.carta2-9,
          carta3: indexButton.carta3-9,
          carta4: indexButton.carta4-9,
          carta5: indexButton.carta5-9,
          carta6: indexButton.carta6-9,
          carta7: indexButton.carta7-9,
          carta8: indexButton.carta8-9,
          carta9: indexButton.carta9-9,
        }
      );
    }
  };

  const handleChangeFW = () => {
    var guia = indexButton.index
    if( guia<4){
      setIndexButton(
        {
          index: indexButton.index+1,
          carta1:indexButton.carta1+9,
          carta2: indexButton.carta2+9,
          carta3: indexButton.carta3+9,
          carta4: indexButton.carta4+9,
          carta5: indexButton.carta5+9,
          carta6: indexButton.carta6+9,
          carta7: indexButton.carta7+9,
          carta8: indexButton.carta8+9,
          carta9: indexButton.carta9+9,
        }
      );
    }
  };
  console.log(estados);

  document.title = "Loteria | MexiCOVID";
  return (
    <div >
      <div className={classes.pagina}>
      <div className={classes.tablero}>
          <div className={classes.fila}>
            <SimplePopper index={indexButton.carta1}/>
            <SimplePopper index={indexButton.carta2}/>
            <SimplePopper index={indexButton.carta3}/>
          </div>
          <div className={classes.fila}>
            <SimplePopper index={indexButton.carta4}/>
            <SimplePopper index={indexButton.carta5}/>
            <SimplePopper index={indexButton.carta6}/>
          </div>
          <div className={classes.fila}style= {{'height':'260'}}>
            <SimplePopper index={indexButton.carta7}/>
            <SimplePopper index={indexButton.carta8}/>
            <SimplePopper index={indexButton.carta9}/>
          </div>
            <div className={classes.fila} style= {{'height':'260'}} >
            <div className={classes.control}>
              <BackTo onClick1={handleChangeBack} index={indexButton.index}/>
              <div className={classes.controlTexto}>
              <Typography>{indexButton.index}/4</Typography>
            </div>
            <ForwardTo onClick1={handleChangeFW} index={indexButton.index}/>
            </div>
          </div>
          </div>
          <NationalGraph data={dataCasos} />
        </div>
        </div>
  );
}

const styles = () => ({
  margin: {
    margin: 1,
  },
  control:{
    background: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    height: 40,
    width: '75%',
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: colors.WHITE,
    fontSize: '35px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  controlTexto:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  barContainer: {
    backgroundColor: colors.BLACK,
    color: colors.WHITE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border:  '1px solid white',
  },
  h1: {
    fontSize: '35px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0'
},
h2: {
  fontSize: '20',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '0',
  color: colors.WHITE
},
    /* Desktop */
    pagina:{
      backgroundColor: colors.BLACK,
      paddingTop: '20px',
      display: 'flex',
      maxWidth: '95%',
      height: '50vw',
      flexDirection: 'row',
    },
    tablero:{
      display:'flex',
      flexDirection:'column',
      width: '30vw',
      height: 840,
    },
    fila:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center',
      height: 260,
    },
    container: {
      background: colors.BLACK,
      overflow: 'hidden'
    },
    header: {
      padding: '20px'
    },
    h1: {
        fontSize: '36px',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '0'
    },
    barContainer: {
      backgroundColor: colors.BLACK,
      color: colors.WHITE,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border:  '1px solid white',
    },
    legend: {
      fontSize: 40,
      fontWeight: 'bold',
      paddingTop: '0px',
      paddingLeft: '520px',
      paddingBottom: '0px',
      position:'relative',
      top:'+135px',
      //borderLeft: '1px solid white',
      //borderRight: '1px solid white',
    },
    legend2: {
      fontSize: 40,
      fontWeight: 'bold',
      paddingTop: '0px',
      paddingLeft: '1090px',
      paddingRight: '0px',
      paddingBottom: '0px',
      position:'relative',
      top:'-210px',
      //borderLeft: '1px solid white',
      //borderRight: '1px solid white',
    },

    /* Mobile */
    [`@media (max-width: ${1000}px)`]: {
        barContainer: {
          backgroundColor: colors.BLACK,
          color: colors.WHITE,
          display: 'block',
          border:  '1px solid white',
        },
        h1: {
          fontSize: '25px'
        }
    }

});


export default withStyles(styles)(LoteriaPag);
