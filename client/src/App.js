import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import Methodology from './components/Methodology';
import Regions from './components/Regions';
import Simulation from './components/Simulation';
import { RegionContextProvider } from './contexts/RegionContext';
import { HomeContextProvider } from './contexts/HomeContext';
import { MapContextProvider } from './contexts/MapContext';
import './css/index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AvailableBeds from './components/AvailableBeds';
import ConfirmAge from './components/ConfirmAge';
import MunicipalitiesFollow from './components/MunicipalitiesFollow';
import DistributionEstate from './components/DistributionEstate';
import Uncertainty from './components/Uncertainty';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway', 
      '-apple-system',
      'BlinkMacSystemFont',
      "'Lato', sans-serif",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: '#fff'
  }
});

class App extends Component {
  
  render() {
    const App = () => (
      <div>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/'>
              <HomeContextProvider>
                <MapContextProvider>
                  <Home/>
                </MapContextProvider>
              </HomeContextProvider>
            </Route>
            <Route path='/about-us' component={Team}/>
            <Route path='/regions' >
              <RegionContextProvider>
                <Regions/>
              </RegionContextProvider>
            </Route>
            <Route path='/simulation' component={Simulation}/>
            <Route path='/methodology' component={Methodology}/>
            <Route path='/availablebeds' component={AvailableBeds}/>
            <Route path='/confirmage' component={ConfirmAge}/>
            <Route path='/municipalitiesfollow' component={MunicipalitiesFollow}/>
            <Route path='/distributionestate' component={DistributionEstate}/>
            <Route path='/uncertainty' component={Uncertainty}/>
          </Switch>
        </ThemeProvider>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;