import * as React from "react";
import useMapMunicipio from '../containers/MapMunicipioContainer';

const MapMunicipioContext = React.createContext();
const MapMunicipioContextProvider = (props) => { 
  const val = useMapMunicipio();
  return (<MapMunicipioContext.Provider value={val}>{props.children}</MapMunicipioContext.Provider>);
};

const MapMunicipioContextConsumer = MapMunicipioContext.Consumer; 

export {
  MapMunicipioContext,
  MapMunicipioContextProvider,
  MapMunicipioContextConsumer
};