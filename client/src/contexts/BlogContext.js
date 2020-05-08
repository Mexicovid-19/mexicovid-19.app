import * as React from "react";
import useBlog from '../containers/BlogContainer';

const BlogContext = React.createContext();
const BlogContextProvider = (props) => { 
  const val = useBlog();
  return (<BlogContext.Provider value={val}>{props.children}</BlogContext.Provider>);
};

const BlogContextConsumer = BlogContext.Consumer; 

export {
  BlogContext,
  BlogContextProvider,
  BlogContextConsumer
};