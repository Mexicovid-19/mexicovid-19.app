import React from 'react';

/* Material UI */
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { Aguascalientes, BajaCalifornia, BajaCaliforniaSur, Campeche, Coahuila, Colima, Chiapas, Chihuahua, CDMX } from './CardTemplate';
/* Utils */
import * as colors from '../../constants/colors';

/* Components */
import Header from '../Header';

import { Helmet } from 'react-helmet';
const AntTabs = withStyles({
  root: {
    position: 'relative',
    top: '-10px',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 40,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('576')]: {
      fontSize: '12px',
      minWidth: 30
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);




const Loteria = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;
  const [value, setValue] = React.useState(3);


  const handleChange = (event, newValue) => {
    //console.log(newValue)
    setValue(newValue);
  };

  document.title = "Loteria | MexiCOVID";  
  return (
    <div>
      <Helmet>
            <title>Elecciones 2021 | MexiCOVID</title>
            <meta name="description" content="Elecciones electorales 2021 en MexiCOVID19" />
			<meta name="keywords" content="Elecciones, electorales, elecciones 2021, elecciones México"/>
			
            <meta property="og:title" content="Elecciones | MexiCOVID"/>
            <meta property="og:description" content="Información sobre las elecciones federales en 2021 en MexiCOVID19"/>
      </Helmet>
        <Header fixed={isMobile}/>
        <div className={classes.pagina}>
          <div className={classes.tablero}>
            <div className={classes.fila}>
              <Aguascalientes/>
              <BajaCalifornia/>
              <BajaCaliforniaSur/>
            </div> 
            <div className={classes.fila}>
              <Campeche/>
              <Coahuila/>
              <Colima/>
            </div>
            <div className={classes.fila}>
              <Chiapas/>
              <Chihuahua/>
              <CDMX/>
            </div>                 
          </div>
        </div>
        </div>
  );
}

const styles = () => ({
    /* Desktop */
    pagina:{
      backgroundColor: colors.BLACK,
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    },
    tablero:{
      display:'flex',
      flexDirection:'column',
    },
    fila:{
      display:'flex',
      flexDirection:'row',
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
      top:'-135px',
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


export default withStyles(styles)(Loteria);