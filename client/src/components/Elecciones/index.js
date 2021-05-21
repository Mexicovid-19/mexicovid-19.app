import React from 'react';

/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/* Components */
import Header from '../Header';
import Distritos from './Distritos'
import Estatal from './Estatal'
import NuevoLeon from './NuevoLeon'

import { Helmet } from 'react-helmet';

const Elecciones = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;

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
            <header className={classes.header}>
                <Typography className={classes.h1} variant={'h1'}>Elecciones Federales 2021</Typography>	
            </header>
            <Distritos/>
            <Estatal/>
            <NuevoLeon/>
        </div>
    </div>
  );
}

const styles = () => ({
    /* Desktop */
    h1: {
        fontSize: '36px'
    },

    /* Mobile */
    [`@media (max-width: ${1000}px)`]: {
        
    }
  
});

export default withStyles(styles)(Elecciones);