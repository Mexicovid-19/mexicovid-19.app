import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Map from './Map';
import Header from '../Header';
import EnhacedTable from './Table';

const Home = ({ classes }) => {
  
  return (
    <div className={classes.container}>
      <Header/>
      <div className={classes.Mapcontainer}>
        <Map/>
        <EnhacedTable/>
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

  [`@media (max-width: ${1000}px)`]: {
    header: {
      display: 'block',
      width: '80%',
      margin: 'auto'
    }
  }
});

export default withStyles(styles)(Home);