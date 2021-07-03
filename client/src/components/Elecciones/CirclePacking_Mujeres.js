//CirclePacking_Mujeres.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CirclePacking1_Chart from './CirclePacking1_Chart';
import CirclePacking2_Chart from './CirclePacking2_Chart';
import CirclePacking3_Chart from './CirclePacking3_Chart';
import CirclePacking4_Chart from './CirclePacking4_Chart';
import CirclePacking5_Chart from './CirclePacking5_Chart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

const NuevoLeon = ({ classes }) => {

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div className={classes.container}>
        <div> <h2 className={classes.subtitle}>Número de mujeres electas por estado y circunscripción electoral para diputaciones locales, diputaciones federales y presidencias municipales</h2> </div>
        <p className={classes.prep}>Elección del 6 de Junio del 2021</p>
        {/*<div className={classes.itemsContainer}>
            <CirclePacking1_Chart/>
            <CirclePacking2_Chart/>
            <CirclePacking3_Chart/>
            </div>
          <div className={classes.itemsContainer}>
            <CirclePacking4_Chart/>
            <CirclePacking5_Chart/>
  </div>*/}

          <div className={classes.itemsContainer}>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle2}>1era Circunscripción</h2>
                        <p className={classes.prep}>Baja California, Baja California Sur, Chihuahua, Durango, Jalisco, Nayarit, Sinaloa y Sonora</p>
                        <CirclePacking1_Chart/>
                        </div>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle2}>2da Circunscripción</h2>
                        <p className={classes.prep}>Aguascalientes, Coahuila, Guanajuato, Nuevo León, Querétaro,
San Luis Potosí, Tamaulipas y Zacatecas</p>
                        <CirclePacking2_Chart/>
                        </div>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle2}>3era Circunscripción</h2>
                        <p className={classes.prep}>Campeche, Chiapas, Oaxaca, Quintana Roo, Tabasco, Veracruz y Yucatán</p>
                        <CirclePacking3_Chart/>
                        </div>
            </div>
            <div className={classes.itemsContainer}>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle2}>4ta Circunscripción</h2>
                        <p className={classes.prep}>CDMX, Guerrero, Morelos, Puebla y Tlaxcala</p>
                        <CirclePacking4_Chart/>
                        </div>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle2}>5ta Circunscripción</h2>
                        <p className={classes.prep}>Colima, Hidalgo, México y Michoacán</p>
                        <CirclePacking5_Chart/>
                        </div>
            </div>

        </div>    
  );
  
}

const styles = () => ({
  container: {
    position: 'relative',
    top: '-40px',
    //borderTop: '1px solid white',
    paddingBottom: '60px',
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
    paddingBottom: '30px',
  },
  itemsContainer2: {
    display: 'flex',
    justifyContent: 'space-evenly',
    //maxWidth: 1600,
    margin: 'auto',
    paddingTop: '50px',
    //borderLeft: '1px solid white',
    //borderRight: '1px solid white',
    paddingBottom: '100px',
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
    height: '400px',
    width: '400px',
    margin: 'auto',
    paddingTop: '-40px'
  },
  chartContainer2: {
    height: '400px',
    width: '400px',
    margin: 'auto',
    paddingTop: '-40px',
    paddingBottom: '100px'
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
    paddingTop: '80px',
    //paddingBottom: '50px',
    color: colors.WHITE,
    //borderBottom: '1px solid white',
    //borderLeft: '1px solid white',
    //borderTop: '1px solid white',
    //borderRight: '1px solid white',
  },
  subtitle2: {
    textAlign: 'center',
    fontSize: 20,
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
    textAlign: 'center',
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