import * as React from "react";
import useRegion from '../containers/RegionContainer';

const RegionContext = React.createContext();
const RegionContextProvider = (props) => { 
  const val = useRegion();

  return (<RegionContext.Provider value={val}>{props.children}</RegionContext.Provider>);
};

const RegionContextConsumer = RegionContext.Consumer; 

export {
  RegionContext,
  RegionContextProvider,
  RegionContextConsumer
};