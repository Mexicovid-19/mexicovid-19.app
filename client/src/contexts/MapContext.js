import * as React from "react";
import useMap from '../containers/MapContainer';

const MapContext = React.createContext();
const MapContextProvider = (props) => { 
  const val = useMap();
  return (<MapContext.Provider value={val}>{props.children}</MapContext.Provider>);
};

const MapContextConsumer = MapContext.Consumer; 

export {
  MapContext,
  MapContextProvider,
  MapContextConsumer
};