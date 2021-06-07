import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';

const NuevoLeon = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
        <div className={classes.container}>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
            <h1>NuevoLeon</h1>
        </div>
  );
}

const styles = () => ({
  /* Desktop */

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    
  }
  
});

export default withStyles(styles)(NuevoLeon);