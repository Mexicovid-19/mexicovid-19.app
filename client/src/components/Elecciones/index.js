import React from 'react';

/* Material UI */
import { withStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import "./tabla.css"

/* Utils */
import * as colors from '../../constants/colors';

/* Components */
import Header from '../Header';
import Distritos from './Distritos'
import Estatal from './Estatal'
import NuevoLeon from './NuevoLeon'
import NuevoLeonAyun from './NuevoLeonAyun'
import NuevoLeonSeccion from './NuevoLeonSeccion'
import Porcentajes from './Porcentajes'
//import Diputados from './Diputados'
import CirclePacking_Mujeres from './CirclePacking_Mujeres'
import MujeresAyunLoc from './MujeresAyunLoc'
import HistDipFed from './HistDipFed'
import MujeresCreditos from './MujeresCreditos'

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Elecciones = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;
  const [value, setValue] = React.useState(3);


  const handleChange = (event, newValue) => {
    //console.log(newValue)
    setValue(newValue);
  };

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div>
      <Helmet>
            <title>Elecciones 2021 | MexiCOVID</title>
            <meta name="description" content="Elecciones electorales 2021 en MexiCOVID19" />
			<meta name="keywords" content="Elecciones, electorales, elecciones 2021, elecciones México"/>
			
            <meta property="og:title" content="Elecciones | MexiCOVID"/>
            <meta property="og:description" content="Información sobre las elecciones federales en 2021 en MexiCOVID19"/>
      </Helmet>
        <div className={classes.container}>
        <Header fixed={isMobile}/>
            <div className={classes.barContainer}>
                {/* titulo */}
                <header className={classes.header}>
                    <Typography className={classes.h1} variant={'h1'}>Proceso electoral 2021</Typography>	
                </header>

                {/* select bar */}
                {isMobile ? (
                  <AntTabs defaultChecked value={value} onChange={handleChange} aria-label="ant example" centered>
                    <AntTab label="Diputados" />
                    <AntTab label="Gubernaturas" />
                    <AntTab label="Nuevo León" />
                    <AntTab label="Participación Mujeres" />
                  </AntTabs>
                ) : (
                  <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Diputados federales" />
                    <AntTab label="Gubernaturas" />
                    <AntTab label="Elección Nuevo León" />
                    <AntTab label="Participación Mujeres"/>
                  </AntTabs>
                )}
                
            </div>
            

            {/* Distritos */}
            <TabPanel value={value} index={0}>
              <>
                <Distritos/>
              </>              
            </TabPanel>
            
            {/* Estatal */}
            <TabPanel value={value} index={1}>
              <>
                <Estatal/>
              </>
            </TabPanel>

            {/* NuevoLeon */}
            <TabPanel value={value} index={2}>
              <>
                <NuevoLeon/>
                <NuevoLeonSeccion/>
                {/* <div className={classes.legend}>
                <img className="foto" src='./img/elecciones/partidos/LEYENDA.png'/>
                </div>
                <div className={classes.legend2}>
                <img className="foto2" src='./img/elecciones/partidos/LEYENDA2.png'/>
                </div> */}
                <NuevoLeonAyun/>
                <Porcentajes/>
                {/*<Diputados/>*/}
                
              </> 
            </TabPanel>
            {/* Participación Mujeres */}
            <TabPanel value={value} index={3}>
              <>

                <CirclePacking_Mujeres/>
                <MujeresAyunLoc/>
                <HistDipFed/>
                <MujeresCreditos/>
              </>
            </TabPanel>
        </div>
    </div>
  );
}

const styles = () => ({
    /* Desktop */
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


export default withStyles(styles)(Elecciones);