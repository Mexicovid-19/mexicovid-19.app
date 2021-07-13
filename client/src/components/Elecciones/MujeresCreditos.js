//HistDipFed.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

import Grid from '@material-ui/core/Grid';

// Animation
import Fade from 'react-reveal/Fade';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const MujeresCreditos = ({ classes }) => {

    document.title = "Elecciones 2021 | MexiCOVID";  
    return (
      <div id = "trigger2" className={classes.container}>
        <Fade bottom cascade>
            <h1 className={classes.subtitle2} style = {{paddingTop: '30px', paddingBottom: '20px', paddingRight: '20px', paddingLeft: '20px'}}>Participantes y personas involucradas</h1>
            <Grid className={classes.grid} container item xs spacing={3} direction="row"  justify="space-around"  alignItems="center">
                <div className={classes.photoGridItem}>
                    <p className={classes.names} align={'center'}>TEXTO Y ANÁLISIS</p>
                    {/* <img src="images/angelfigueroa.jpg" className="img-responsive" alt="Image"/> */}
                    <br/>
                    <p>Grissel Olivera</p>
                    <p>Azucena Rojas</p>
                    <p>Yunuel Cruz</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>CONSTRUCCIÓN DE LA BASE DE DATOS</p>
                    {/* <img src="images/juancarlosgarfias.jpg" className="img-responsive" alt="Image"/> */}
                    <br/>
                    <p>Adriana Michelle Acosta García</p>
                    <p>Alejandro Antonio Domínguez Cristerna</p>
                    <p>Alexa Jeressi Martínez Soto</p>
                    <p>Allison Garzón Villegas</p>
                    <p>Ana Paula Meillon Pantoja</p>
                    <p>Arturo Demián García Nepomuceno</p>
                    <p>Erika González Garza</p>
                    <p>Luis Ángel Hernández Ruiz</p>
                    <p>Marisol Urias Luna</p>
                    <p>Marla Patricia De la Cruz Rivas</p>
                    <p>Regina Resendiz Vargas</p>
                </div>
                <div className={classes.photoGridItem}> 
                    <p className={classes.names} align={'center'}>VISUALIZACIÓN</p>
                    {/* <img src="images/mildred.jpg" className="img-responsive" alt="Image"/> */}
                    {/* <p>Estudiante de Ingeniería en Tecnologías Computacionales, buscando tener un impacto positivo en la ciudad a través del desarrollo de nuevas tecnologías.</p> */}
                    <br/>
                    <p>Estefanía Charles</p>
                    <p>Ana Elisa Estrada</p>
                    <p>Javier Agostini</p>
                </div>
            </Grid> 
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
      //position: 'absolute',
      //zIndex: 9,
      marginLeft: 'auto',
      marginRight: 'auto',
      left: 0,
      right: 0
    },
    grid: {
        marginBottom: '50px'
    },
    photoGridItem: {
        //border: '1px solid #fff',
        width: '300px',
        height: '200px',
        marginTop: '30px !important',
        marginBottom: '150px !important',
        color: colors.WHITE,
        textAlign: 'center'
    },
    names: {
        fontWeight: 'bold'
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
  

export default withStyles(styles)(MujeresCreditos);