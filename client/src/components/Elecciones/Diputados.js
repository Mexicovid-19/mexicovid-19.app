//Diputados.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Diputados_Chart from './Diputados_Chart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';


const NuevoLeon = ({ classes }) => {

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div className={classes.container}>
        <div> <h2 className={classes.subtitle}>Diputados de Mayoría Relativa que fueron Reelectos en la elección del 2021</h2> </div>
        <div className={classes.itemsContainer}>
            <div>
                        <div className={classes.chartContainer}>
                            <Diputados_Chart/>
                        </div>
                </div>
                
            </div>
        </div>    
  );
  
}

const styles = () => ({
  container: {
    position: 'relative',
    top: '-40px',
    borderTop: '1px solid white',
  },
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    //maxWidth: 1600,
    margin: 'auto',
    paddingTop: '100px',
    //borderLeft: '1px solid white',
    //borderRight: '1px solid white',
    paddingBottom: '60px',
  },
  map: {
    //height: '800px',
    //width: '40vw',
    height: '700px',
    width: '30vw',
    margin: 'auto',
    borderBottom: '1px solid white',
    borderLeft: '1px solid white',
    borderTop: '1px solid white',
    borderRight: '1px solid white',
  },
  chartContainer: {
    height: '500px',
    width: '500px',
    margin: 'auto',
    paddingTop: '-40px'
  },
  chartContainer2: {
    height: '700px',
    width: '700px',
    margin: 'auto',
    paddingTop: '150px'
  },
  districtName: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: colors.WHITE
  },
  munName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '50px',
    margin: 'auto',
    color: colors.WHITE
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '50px',
    //paddingBottom: '50px',
    color: colors.WHITE,
    //borderBottom: '1px solid white',
    //borderLeft: '1px solid white',
    //borderTop: '1px solid white',
    //borderRight: '1px solid white',
  },
  subtitle2: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    //paddingTop: '50px',
    color: colors.WHITE,
  },
  tabla: {
    //textAlign: 'center',
    //fontSize: 40,
    //fontWeight: 'bold',
    //paddingTop: '50px'
  },
  prep: {
    color: colors.WHITE,
    textAlign: 'center'
},
  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    container: {
      position: 'relative',
      top: '-20px'
    },
    itemsContainer: {
        display: 'block',
        margin: 'auto',
    },
    map: {
        minHeight: '400px',
        height: '400px',
        width: '100vw',
    },
    chartContainer: {
        height: '550px',
        width: '100vw',
        flex: 1,
        margin: 'auto',
        //padding: '50px 10px',
    },
    subtitle: {
      fontSize: 20,
    },
  }
  
});


export default withStyles(styles)(NuevoLeon);