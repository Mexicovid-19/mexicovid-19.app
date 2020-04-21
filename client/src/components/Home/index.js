import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Map from './Map';
import Header from '../Header';

const Home = ({ classes }) => {
  
  return (
    <div className="Home">
      <Header/>
      <Map/>
    </div>
  );
}

const styles = () => ({
  container: {
    width: '100%'
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
