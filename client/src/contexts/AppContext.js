import * as React from "react";
import useApp from '../containers/AppContainer';

const AppContext = React.createContext();
const AppContextProvider = (props) => { 
  const val = useApp();

  return (<AppContext.Provider value={val}>{props.children}</AppContext.Provider>);
};

const AppContextConsumer = AppContext.Consumer; 

export {
  AppContext,
  AppContextProvider,
  AppContextConsumer
};