//HistDipFed.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import HistDipFed_Chart from './HistDipFed_Chart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';


const HistDipFed = ({ classes }) => {

    document.title = "Elecciones 2021 | MexiCOVID";  
    return (
      <div className={classes.container}>
          <div> <h2 className={classes.subtitle}>Porcentaje de diputaciones federales por sexo</h2> </div>
          <p className={classes.subtitle2}>1952-2024</p>
          <div className={classes.itemsContainer}>

          <div className={classes.chartContainer}>
          <HistDipFed_Chart/>
          </div>


              {/*<div>
              <HistDipFed_Chart/>
              </div>*/}
                  
              </div>
          </div>    
    );
    
  }
  
  const styles = () => ({
    container: {
      position: 'relative',
      top: 'auto',
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
    },
    /* Desktop */
    itemsContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      //maxWidth: 1600,
      margin: 'auto',
      //paddingTop: '100px',
      //borderLeft: '1px solid white',
      //borderRight: '1px solid white',
      //paddingBottom: '60px',
    },
    chartContainer: {
      height: '700px',
      //width: '600px',
      margin: 'auto',
      minHeight: '700px',
      width: '50vw',
      flex: 1,
      margin: 'auto',
      paddingRight: '30px',
      //paddingTop: '-40px',
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
      fontSize: 25,
      fontWeight: 'normal',
      //paddingTop: '50px',
      color: colors.WHITE,
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
  

export default withStyles(styles)(HistDipFed);