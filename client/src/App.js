import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Team from './components/Team';
import Methodology from './components/Methodology';
import Regions from './components/Regions';
import { HomeContextProvider } from './contexts/HomeContext';
import { MapContextProvider } from './contexts/MapContext';
import './css/index.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
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
                        <Home />
                    </MapContextProvider>
                </HomeContextProvider>
            </Route>
            <Route path='/about-us' component={Team}/>
            <Route path='/regions' component={Regions}/>
            <Route path='/methodology' component={Methodology}/>
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