import React from 'react';
import axios from 'axios';

const useRegion = () => {
  const [dataChart, setDataChart] = React.useState([]);
  
  React.useEffect(() => {
    callDataChart();
  }, []);

  React.useEffect(() => {
    if(dataChart ) {
      
    }
  }, [setDataChart]);
  
  let callDataChart = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/region/data/states`, {})
    .then(res => {
        setDataChart(res.data);
    });
  }

  return {
    dataChart
  }
}

export default useRegion;