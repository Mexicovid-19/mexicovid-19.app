import React from 'react';
import axios from 'axios';

const useCalculator = () => {
    

    const [calculatorData,setCalculator]=React.useState([]);
    React.useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/calculadora/data/calculadora`, {}).then(response => {
            setCalculator(response.data);
        })
    }, []);

    return {
        calculatorData
    }
}

export default useCalculator;