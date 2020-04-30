import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Team from './components/Team';
import Methodology from './components/Methodology';
import Regions from './components/Regions';
import { RegionContextProvider } from './contexts/RegionContext';
import { HomeContextProvider } from './contexts/HomeContext';
import { MapContextProvider } from './contexts/MapContext';
import './css/index.css';
import AvailableBeds from './components/AvailableBeds';
import ConfirmAge from './components/ConfirmAge';
import MunicipalitiesFollow from './components/MunicipalitiesFollow';
import DistributionEstate from './components/DistributionEstate';


import Blog from "./containers/Blog"
import BlogPost from "./containers/BlogPost";

const Router = () => {
  return (
    <BrowserRouter>
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
        <Route path='/methodology' component={Methodology}/>
        <Route path='/availablebeds' component={AvailableBeds}/>
        <Route path='/confirmage' component={ConfirmAge}/>
        <Route path='/municipalitiesfollow' component={MunicipalitiesFollow}/>
        <Route path='/distributionestate' component={DistributionEstate}/>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogPost}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
