import * as React from "react";
import useEstados from '../../containers/elecciones/EstadosContainer';

const EstadosContext = React.createContext();
const EstadosContextProvider = (props) => {
    const val = useEstados();
    return (<EstadosContext.Provider value={val}>{props.children}</EstadosContext.Provider>);
};

const EstadosContextConsumer = EstadosContext.Consumer;

export {
    EstadosContext,
    EstadosContextProvider,
    EstadosContextConsumer
};