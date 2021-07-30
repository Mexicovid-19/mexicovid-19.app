import React, {useState } from 'react'
/* Material UI */
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Header from '../Header';
/* Utils */
import * as colors from '../../constants/colors';
import LoteriaPag from './Loteria';
import { Helmet } from 'react-helmet';
document.title = "Loteria | MexiCOVID";
const LaLoteria = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;
  const [value, setValue] = React.useState(3);
return (
  <div className= {classes.completa}>
  <Helmet>
  <title>COVID-19 en México | MexiCOVID</title>
  <meta name="description" content="Elecciones electorales 2021 en MexiCOVID19" />
  <meta name="keywords" content="Elecciones, electorales, elecciones 2021, elecciones México"/>

  <meta property="og:title" content="MexiCOVID"/>
  <meta property="og:description" content="Información sobre las elecciones federales en 2021 en MexiCOVID19"/>
  </Helmet>
  <Header fixed={isMobile}/>
  <div className={classes.barContainer}>
  <header className={classes.header}>
    <Typography className={classes.h1} variant={'h1'}>COVID-19 en México</Typography>
  </header>
  </div>
  <LoteriaPag/>
  </div>
  )
};

const styles = () => ({
  completa:{
    backgroundColor: colors.BLACK
  },
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


export default withStyles(styles)(LaLoteria);
