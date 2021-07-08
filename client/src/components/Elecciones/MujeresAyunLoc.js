//MujeresAyunLoc.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Mujeres_Barchart from './Mujeres_Barchart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

// Animation
import Fade from 'react-reveal/Fade'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const NuevoLeon = ({ classes }) => {

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div id = "trigger" className={classes.container}>
      <Fade bottom>
      <div> <h2 className={classes.subtitle}>Porcentaje de mujeres electas en diputaciones locales y presidencias municipales por entidad federativa</h2> </div>
      <p className={classes.prep}>Elección del 6 de Junio del 2021</p>
        <Controller>
          <Scene duration = {150} triggerElement = "#trigger" offset = {300}>
            {(progress) => (
              <Tween 
              from = {{
                css: {
                  opacity: '1',
                  zIndex: '9'
                },
                ease: 'Circ.easeOutExpo',
              }}
              to = {{
                css: {
                  opacity: '0',
                  zIndex: '0'
                },
                ease: 'Circ.easeOutExpo',
              }}
                totalProgress = {progress}
                paused
              >
                <p id = "textTrigger" className = {classes.text} style = {{marginTop: '30px',padding: '20px', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '25px'}}>
                El lado izquierdo de la gráfica se presenta el porcentaje de mujeres electas a nivel local para el cargo de diputaciones de mayoría. Destaca que 18 Congresos 
                locales estarán integrados de forma paritaria ya que el porcentaje de mujeres electas es igual o mayor al 50%. En el caso de Campeche, el 66.6% de las diputaciones 
                de mayoría serán encabezadas por una legisladora. 

                <br></br>
                <br></br>

                El lado derecho de la gráfica se presenta el porcentaje de presidentas municipales electas. Se observa que, si bien hubo un avance en cuanto a la representación de 
                mujeres en Alcaldías, aún no está consolidada su participación en este nivel de gobierno, ya que únicamente 5 entidades (CDMX, BCN, COL, BCS y Q ROO) alcanzaron la 
                paridad al lograr un porcentaje mayor o igual al 50%. La visualización invita a analizar qué hace falta para que las mujeres logren representación política como alcaldesas.
                </p>
              </Tween>
              
            )}
          </Scene>
          <Scene duration = {150} triggerElement = "#trigger" offset = {300}>
            {(progress) => (
              <Tween 
              from = {{
                css: {
                  opacity: '0.2',
                  zIndex: '0'
                },
                ease: 'Circ.easeOutExpo',
              }}
              to = {{
                css: {
                  opacity: '1',
                  zIndex: '9'
                },
                ease: 'Circ.easeOutExpo',
              }}
              totalProgress = {progress}
              paused
              >
                <div className={classes.itemsContainer}>
                  <div className={classes.chartContainer}>
                    <Mujeres_Barchart/>
                  </div>
                </div>
              </Tween>
              
            )}
          </Scene>
        </Controller>
        <p className={classes.subtitle2}>* Estados donde no hubó elecciones de diputaciones locales o ayuntamientos</p>
          {/* <Fade bottom>
            <div id = "chartTrigger" className={classes.itemsContainer}>
              <div className={classes.chartContainer}>
                <Mujeres_Barchart/>
                </div>
            </div>
          </Fade> */}
          </Fade>
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
    height: '600px',
    //width: '600px',
    margin: 'auto',
    minHeight: '500px',
    width: '50vw',
    flex: 1,
    margin: 'auto',
    paddingRight: '30px',
    //paddingTop: '-40px',
    paddingBottom: '-20px'
  },
  chartContainer2: {
    //margin: 'auto',
    paddingLeft: '10px',
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
    textAlign: 'left',
    fontSize: 10,
    paddingTop: '-40px',
    paddingLeft: '30px',
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
  text: {
    textAlign: 'center',
    fontSize: 18,
    maxWidth: '95%',
    margin: 'auto',
    paddingTop: '30px',
    color: colors.WHITE,
    position: 'absolute',
    zIndex: 9,
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0
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