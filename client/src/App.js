import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Map from './modules/Map';

const App = ({ classes }) => {
  
  return (
    <div className="App">
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

export default withStyles(styles)(App);
