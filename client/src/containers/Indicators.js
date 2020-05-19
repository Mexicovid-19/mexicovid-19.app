import React from 'react';
import axios from 'axios';

const useIndicators = () => {
    const [dataChart, indicatorsData] = React.useState([]);

    let callIndicators = () =>{
        axios.post(`${process.env.REACT_APP_API_URL}/indicators/data/indicators`, {})
            .then(res => {
                setDataChart(res.data);
        });
    }

    return {
        indicatorsData
    }
}

export default useIndicators;