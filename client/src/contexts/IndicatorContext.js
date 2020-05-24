import * as React from "react";
import useIndicator from '../containers/IndicatorContainer';

const IndicatorContext = React.createContext();
const IndicatorContextProvider = (props) => {
    const val = useIndicator();
    return (<IndicatorContext.Provider value={val}>{props.children}</IndicatorContext.Provider>);
};

const IndicatorContextConsumer = IndicatorContext.Consumer;

export {
    IndicatorContext,
    IndicatorContextProvider,
    IndicatorContextConsumer
};