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



import { Helmet } from 'react-helmet';
/*import { aguascalientes, aguascalientes } from './estados/estados';*/
const AntTabs = withStyles({
  root: {
    position: 'relative',
    top: '+10px',
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

const estados = estadosMexicanos;

const Loteria = ({ classes }) => {
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
          carta1:indexButton.carta1-1,
          carta2: indexButton.carta2-1,
          carta3: indexButton.carta3-1,
          carta4: indexButton.carta4-1,
          carta5: indexButton.carta5-1,
          carta6: indexButton.carta6-1,
          carta7: indexButton.carta7-1,
          carta8: indexButton.carta8-1,
          carta9: indexButton.carta9-1,
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
          carta1:indexButton.carta1+1,
          carta2: indexButton.carta2+1,
          carta3: indexButton.carta3+1,
          carta4: indexButton.carta4+1,
          carta5: indexButton.carta5+1,
          carta6: indexButton.carta6+1,
          carta7: indexButton.carta7+1,
          carta8: indexButton.carta8+1,
          carta9: indexButton.carta9+1,
        }
      );
    }
  };
  console.log(estados);

  document.title = "Loteria | MexiCOVID";
  return (
    <div style={{ height: "100%"}} >
      <Helmet>
        <title>Elecciones 2021 | MexiCOVID</title>
        <meta name="description" content="Elecciones electorales 2021 en MexiCOVID19" />
        <meta name="keywords" content="Elecciones, electorales, elecciones 2021, elecciones México"/>

        <meta property="og:title" content="Elecciones | MexiCOVID"/>
        <meta property="og:description" content="Información sobre las elecciones federales en 2021 en MexiCOVID19"/>
      </Helmet>
      <Header fixed={isMobile}/>
      <div className={classes.barContainer}>
        <header className={classes.header}>
          <Typography className={classes.h1} variant={'h1'}>Proceso electoral 2021</Typography>
        </header>
      </div>
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
          <div className={classes.fila}>
            <SimplePopper index={indexButton.carta7}/>
            <SimplePopper index={indexButton.carta8}/>
            <SimplePopper index={indexButton.carta9}/>
          </div>
          <div className={classes.fila}>
            <div className={classes.control}>
              <BackTo onClick1={handleChangeBack} index={indexButton.index}/>
              <div className={classes.controlTexto}>
              <Typography>0/4</Typography>
            </div>
            <ForwardTo onClick1={handleChangeFW} index={indexButton.index}/>

            </div>
          </div>

          </div>
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
      padding: '20px',
      display: 'flex',
      height: '50vw',
      flexDirection: 'column',
    },
    tablero:{
      display:'flex',
      flexDirection:'column',
      width: 510,
    },
    fila:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'center'
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


export default withStyles(styles)(Loteria);
