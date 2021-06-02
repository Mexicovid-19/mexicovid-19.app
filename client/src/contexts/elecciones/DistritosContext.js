import * as React from "react";
import useDistritos from '../../containers/elecciones/DistritosContainer';

const DistritosContext = React.createContext();
const DistritosContextProvider = (props) => {
    const val = useDistritos();
    return (<DistritosContext.Provider value={val}>{props.children}</DistritosContext.Provider>);
};

const DistritosContextConsumer = DistritosContext.Consumer;

export {
    DistritosContext,
    DistritosContextProvider,
    DistritosContextConsumer
};