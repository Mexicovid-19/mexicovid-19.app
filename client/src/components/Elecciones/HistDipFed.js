//HistDipFed.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import HistDipFed_Chart from './HistDipFed_Chart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

// Animation
import Fade from 'react-reveal/Fade';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const HistDipFed = ({ classes }) => {

    document.title = "Elecciones 2021 | MexiCOVID";  
    return (
      <div id = "trigger2" className={classes.container}>
        <Fade bottom>
          <div> <h2 className={classes.subtitle}>Porcentaje de diputaciones federales de mayoría relativa por sexo</h2> </div>
          <p className={classes.subtitle2}>1952-2024</p>

          <Controller>
            <Scene duration = {100} triggerElement = "#trigger2" offset = {285}>
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
                  Finalmente, con los datos públicos del Centro de Estudios para el logro 
                  de la Igualdad de Género (antes CEAMEG) y del Instituto Nacional Electoral; esta última visualización ilustra 
                  el recorrido histórico de la participación política de las mujeres en la Cámara de Diputados a nivel federal.

                  <br></br>
                  <br></br>

                  La gráfica muestra que transcurrieron casi siete décadas para que las mujeres estén a un paso de alcanzar la tan 
                  anhelada paridad. Puntualmente, se observa que entre 1952 y 1955 las mujeres representaban tan solo el .6% de las 
                  diputaciones federales; en la entrante LXV legislatura que comienza este 2021 y concluye en 2024, las mujeres  ya 
                  representan el  49.20% de las curules.
                  </p>

                </Tween>
              )}
            </Scene>
            <Scene duration = {100} triggerElement = "#trigger2" offset = {285}>
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
                      <HistDipFed_Chart/>
                      </div>
                    </div>
                  </Tween>
                  
                )}
            </Scene>
          </Controller>
          {/* <div className={classes.itemsContainer}>

          <div className={classes.chartContainer}>
          <HistDipFed_Chart/>
          </div>
          


              <div>
              <HistDipFed_Chart/>
              </div>
                  
              </div> */}
          </Fade>
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
    text: {
      textAlign: 'center',
      fontSize: 18,
      maxWidth: '95%',
      margin: 'auto',
      paddingTop: '30px',
      color: colors.WHITE,
      position: 'absolute',
      //zIndex: 9,
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
  

export default withStyles(styles)(HistDipFed);