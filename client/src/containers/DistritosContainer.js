import React from 'react';
import axios from 'axios';

const useDistritos = () => {
    const [distritosData,setDistritosData] = React.useState([]);
    const [distritosGanadoresData,setDistritosGanadoresData] = React.useState([]);

    React.useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/elecciones/data/distritos`, {}).then(response => {
            console.log("responsee",response)
            setDistritosData(response.data);
        })
        axios.post(`${process.env.REACT_APP_API_URL}/elecciones/data/distritos-ganador`, {}).then(response => {
            console.log("responsee",response)
            setDistritosGanadoresData(response.data);
        })
    }, []);

    return {
        distritosData,
        distritosGanadoresData
    }
}

export default useDistritos;