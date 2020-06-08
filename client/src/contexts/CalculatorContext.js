import * as React from "react";
import useCalculator from '../containers/CalculatorContainer';

const CalculatorContext = React.createContext();
const CalculatorContextProvider = (props) => {
    const val = useCalculator();
    return (<CalculatorContext.Provider value={val}>{props.children}</CalculatorContext.Provider>);
};

const CalculatorContextConsumer = CalculatorContext.Consumer;

export {
    CalculatorContext,
    CalculatorContextProvider,
    CalculatorContextConsumer
};