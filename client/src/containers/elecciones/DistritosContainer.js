import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useDistritos = () => {
    const [distritosData,setDistritosData] = useState([]);
    const [distritosGanadoresData,setDistritosGanadoresData] = useState([]);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/elecciones/data/distritos`, {}).then(response => {
            console.log("responsee",response)
            setDistritosData(response.data);
        })
    }, []);

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/elecciones/data/distritos-ganadores`, {}).then(response => {
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