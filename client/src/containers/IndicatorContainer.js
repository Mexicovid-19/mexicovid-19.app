import React from 'react';
import axios from 'axios';

const useIndicators = () => {
    

    axios.post(`${process.env.REACT_APP_API_URL}/indicators/data/indicators`, {})
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
    });


    let indicatorsData;
    React.useEffect(() => {
        
        let fourPackProducts = axios.post(`${process.env.REACT_APP_API_URL}/indicators/data/indicators`, {}).then(response => {
            indicatorsData = response.data;
            console.log(indicatorsData);
            return indicatorsData;
        })
    }, []);

    return {
        indicatorsData
    }
}

export default useIndicators;