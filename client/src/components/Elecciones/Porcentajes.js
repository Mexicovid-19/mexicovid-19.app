//Porcentajes.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PAN_Porcentajes_Chart from './PAN_Porcentajes_Chart';
import PRI_Porcentajes_Chart from './PRI_Porcentajes_Chart';
import MC_Porcentajes_Chart from './MC_Porcentajes_Chart';
import MORENA_Porcentajes_Chart from './MORENA_Porcentajes_Chart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';


const NuevoLeon = ({ classes }) => {

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div className={classes.container}>
        <div> <h2 className={classes.subtitle}> Distribución del voto por tipo de elección en Nuevo León y por partido </h2> </div>
        <h2 className={classes.subtitle5}> En esta gráfica se presentan los porcentajes de votación a nivel estado de cuatro partidos políticos para cuatro tipos de elección. Los partidos son el PAN, el PRI, MC y Morena y los tipos de elección son para la gubernatura, para ayuntamientos, diputaciones locales y diputaciones federales. El gráfico sirve para dimensionar el voto dividido por tipo de elección en Nuevo León.</h2> 
        <div className={classes.itemsContainer}>
                <div>
                        <div className={classes.chartContainer}>
                            <h2 className={classes.subtitle4}>PAN</h2>
                            <PAN_Porcentajes_Chart/> 
                            <div className={classes.legend}>
                              <img className="foto4" src='./img/elecciones/partidos/LFunnelPAN.png'/>
                            </div>
                           <div><h2 className={classes.subtitle2}>En el caso del PAN se observa una diferencia de unos 12 puntos entre el porcentaje que obtuvo para la elección a la gubernatura y la elección para diputaciones federales. En medio, se aprecian diferencias entre 6 y 9 puntos con respecto a las elecciones para ayuntamientos y diputaciones locales.</h2></div>
                        </div>
                </div>
                <div>
                        <div className={classes.chartContainer}>
                            <h2 className={classes.subtitle4}>PRI</h2>
                            <PRI_Porcentajes_Chart/>
                            <div className={classes.legend}>
                              <img className="foto4" src='./img/elecciones/partidos/LFunnelPRI.png'/>
                            </div>
                            <div><h2 className={classes.subtitle2}>En el caso del PRI, la diferencia entre porcentajes de votación según el tipo de elección no excede los dos puntos. Entre la elección a la gubernatura y la de ayuntamientos se observa una diferencia mejor a un punto. Respecto a las diputaciones tanto locales como federales se aprecia una distancia de 2%.</h2></div>
                        </div>
                </div>
                <div>
                        <div className={classes.chartContainer}>
                            <h2 className={classes.subtitle4}>MC</h2>
                            <MC_Porcentajes_Chart/>
                            <div className={classes.legend}>
                              <img className="foto4" src='./img/elecciones/partidos/LFunnelMC.png'/>
                            </div>
                            <div><h2 className={classes.subtitle2}>Para MC, esta diferencia resulta más notoria: casi 18 por ciento entre el porcentaje de votos para la gubernatura y las elecciones tanto para diputaciones federales como locales. En el caso de ayuntamientos, la distancia es de 15 puntos con respecto a la elección a la gubernatura.</h2></div>
                        </div>
                </div>
                <div>
                        <div className={classes.chartContainer}>
                        <h2 className={classes.subtitle4}>MORENA</h2>
                            <MORENA_Porcentajes_Chart/>
                            <div className={classes.legend}>
                              <img className="foto4" src='./img/elecciones/partidos/LFunnelMORENA.png'/>
                            </div>
                            <div><h2 className={classes.subtitle2}>Finalmente, en el caso de Morena, la diferencia entre la elección a la gubernatura y la elección para diputaciones federales es de cuatro puntos, tres con respecto a las diputaciones locales y medio punto con ayuntamientos.</h2></div>
                        </div>
                </div>
            </div>
              <div><h2 className={classes.subtitle5}>De lo anterior se puede observar que el porcentaje de votos recibido por el PRI es muy similar entre tipos de elección, seguido por las menores diferencias presentadas por Morena. Estos patrones contrastan con las distancias de 12 y 18 puntos observadas para los casos del PAN y MC.

 

De estas comparaciones parecía claro que MC resultó, en el agregado estatal, mucho más exitoso en la elección para la gubernatura que en las diputaciones, a la inversa que el PAN. En tanto, el PRI tiene un porcentaje de apoyo muy similar, independientemente del tipo de elección, al igual que Morena, aunque en menor medida, dada la citada distancia de 4 puntos entre la elección a la gubernatura y la elección para diputaciones federales.

 

Esto nos sugiere que resulta útil comparar los tipos de elección a nivel entidad federativa para detectar la existencia de posibles patrones diferenciados, los cuales nos ayudan a explorar posibles razones que nos permitan entender qué significa un determinado porcentaje de votación para la gubernatura, en el contexto de las elecciones que se celebraron de manera simultánea en un mismo estado. </h2></div>
        </div>    
  );
  
}

const styles = () => ({
  container: {
    position: 'relative',
    top: '-40px',
    bottom: '400px',
    borderTop: '1px solid white',
    paddingBottom: '50px'
  //  margin: '2px 1em 0 -10px',
  },
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    //maxWidth: 1600,
    margin: 'auto',
    paddingTop: '75px',
    //borderLeft: '1px solid white',
    //borderRight: '1px solid white',
    paddingBottom: '190px',
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
    height: '300px',
    width: '300px',
    margin: 'auto',
    //paddingTop: '-500px',
    //maxWidth: '95%',
  },
  chartContainer2: {
    height: '300px',
    width: '200px',
    margin: 'auto',
    //paddingTop: '150px'
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
    //paddingBottom: '-60px',
    color: colors.WHITE,
    //borderBottom: '1px solid white',
    //borderLeft: '1px solid white',
    //borderTop: '1px solid white',
    //borderRight: '1px solid white',
  },
  subtitle2: {
    textAlign: 'center',
    textAlign: 'justify',  
    fontSize: 12,
    fontWeight: 'normal',
    //paddingTop: '50px',
    margin: 'auto',
    color: colors.WHITE,
    paddingLeft: '10px',
    paddingRight: '10px',
    maxWidth: '95%',
    margin: 'auto'
  },
  subtitle3: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    paddingTop: '45px',
    //paddingBottom: '-200px',
    paddingLeft: '60px',
    paddingRight: '60px',
    color: colors.WHITE,
  },
  subtitle4: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    top: '-200px',
    margin: 'auto',
    color: colors.WHITE,
  },
  subtitle5: {
    textAlign: 'center',
    textAlign: 'justify',
    fontSize: 20,
    fontWeight: 'normal',
    paddingTop: '45px',
    //paddingBottom: '-200px',
    paddingLeft: '60px',
    paddingRight: '60px',
    color: colors.WHITE,
  },
  prep: {
    color: colors.WHITE,
    textAlign: 'center'
},
legend: {
  textAlign: 'center',
  //paddingLeft: '100px',
  paddingBottom: '15px',
  position: 'relative',
  //top: '500px'
},
legend2: {
  textAlign: 'left',
  paddingLeft: '300px',
  position: 'relative',
  top: '600px'
},
  /* Mobile */
  [`@media (max-width: ${1200}px)`]: {
    container: {
      position: 'relative',
      top: '-20px'
    },
    itemsContainer: {
        display: 'block',
        margin: 'auto',
        paddingBottom: '0px'
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