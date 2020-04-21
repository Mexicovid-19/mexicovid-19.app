import * as React from "react";
import useHome from '../containers/HomeContainer';

const HomeContext = React.createContext();
const HomeContextProvider = (props) => { 
  const val = useHome();

  return (<HomeContext.Provider value={val}>{props.children}</HomeContext.Provider>);
};

const HomeContextConsumer = HomeContext.Consumer; 

export {
  HomeContext,
  HomeContextProvider,
  HomeContextConsumer
};