import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './contexts/AppContext';
import { MapContextProvider } from './contexts/MapContext';

ReactDOM.render(
    <AppContextProvider>
        <MapContextProvider>
        <App />
        </MapContextProvider>
    </AppContextProvider>
, document.getElementById('root'));