import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MapIcon from '@material-ui/icons/Map';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import * as colors from '../../constants/colors';
import { HomeContext } from '../../contexts/HomeContext';
import { MapContext } from '../../contexts/MapContext';
import ColorGradientBar from './ColorGradientBar';
import Map from './Map';
import Header from '../Header';
import EnhacedTable from './Table';
import TotalMobile from './TotalMobile';
import { Helmet } from 'react-helmet';

const Home = ({ classes }) => {
  const { 
    selectedLabel,
    isMap,
    onChangeTab
  } = React.useContext(HomeContext);
  const { thresholdsNum } = React.useContext(MapContext);
    
  const isMobile = window.innerWidth < 1000;

  document.title = "MexiCOVID: COVID-19 en México";  
  return (
    <div>
      <Helmet>
          <title>MexiCOVID: COVID-19 en México</title>
          <meta name="description" content="Seguimiento diario a la evoluación del Covid-19 en México @ITESM" />
          <meta property="og:image" content="http://mexicovid19.app/img/mediashare/home.PNG" />
          <meta name="keywords" content="coronavirus,mapa coronavirus, coronavirus mexico,casos coronavirus,coronavirus tec,Mexicovid"/>

          <meta property="og:image" content="http://mexicovid19.app/img/mediashare/home.PNG"/>
          <meta property="og:title" content="MexiCOVID: COVID-19 en México"/>
          <meta property="og:description" content="Seguimiento diario a la evoluación del Covid-19 en México @ITESM"/>
      </Helmet>
    <div className={classes.container}>
      <Header fixed={isMobile}/>
      <div className={classes.buttonControlContainer}>
        {isMobile && <TotalMobile/>}
      </div>
      <div className={classes.Mapcontainer}>
        <Map/>
        {(!isMobile || !isMap) && <EnhacedTable/>}
      </div>
      <div className={classes.fixedMobile}>
        <div className={classes.buttonsContainer}>
          {isMap && <ColorGradientBar selectedLabel={selectedLabel} thresholdsNum={thresholdsNum} />}
          <div className={classes.bottomButtons}>
            <Button className={isMap ? classes.selected : classes.btn} color="inherit" onClick={() => onChangeTab(false)}><TimelineOutlinedIcon className={classes.icons}/>Gráfica</Button>	
            <Button className={isMap ? classes.btn : classes.selected} color="inherit" onClick={() => onChangeTab(true)}><MapIcon className={classes.icons}/>Mapa</Button>	
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%'
  },

  Mapcontainer: {
    display: 'flex',
    flexDirection: 'row'
  },

  buttonControlContainer: {
    display: 'none'
  },

  fixedMobile: {
    display: 'none'
  },

  [`@media (max-width: ${1000}px)`]: {
    container: {
      marginTop: '56px'
    },

    bottomButtons: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      padding: '5px 0px',
    },

    btn: {
      color: colors.WHITE,
      backgroundColor: colors.BLACK,
      width: '100%',
    },

    selected: {
      width: '100%',
      backgroundColor: colors.WHITE,
      color: colors.BLACK,
      '&:focus': {
        backgroundColor: colors.WHITE,
        color: colors.BLACK,
      }
    },

    buttonControl: {
      padding: '5px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    
    expandIcon: {
      color: colors.WHITE
    },
    
    buttonsContainer: {
      background: colors.BLACK,
      display: 'flex',
      flexDirection: 'column',
      color: colors.WHITE,
    },
    
    fixedMobile: {
      display: 'inline',
      position: 'fixed',
      height: 'fit-content',
      width: '100%',
      bottom: '0',
      zIndex: '10'
    },
    
    buttonControlContainer: {
      display: 'flex',
      flexDirection: 'column',
      color: colors.WHITE,
      background: colors.BLACK,
    }
  }
  
});

export default withStyles(styles)(Home);