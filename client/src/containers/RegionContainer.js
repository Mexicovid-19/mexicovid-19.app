import React from 'react';
import axios from 'axios';
import { STATES } from '../constants/states';

const useRegion = () => {
  const [states, _] = React.useState([...STATES, {title: 'Nacional', id: 'Nacional', color: '#fff'}]);
  const [dataChart, setDataChart] = React.useState([]);
  
  const [statesBool, setstatesBool] = React.useState(Array(33).fill(false));

  const [statesToChart, setStatesToChart] = React.useState([]);
  const [selectedStates, setSelectedStates] = React.useState([]);
  
  const [stateValue, setStateValue] = React.useState(states[32]);
  
  React.useEffect(() => {
    callDataChart();
  }, []);

  React.useEffect(() => {
    if( dataChart.length > 0 ) {
      console.log(dataChart)
      for(var state in dataChart) {
        if(state < 5) {
          statesBool[state] = true;
          selectedStates.push(states[state]);
          statesToChart.push(dataChart[state]);
        }
      }
      
      setstatesBool([...statesBool]);
      setSelectedStates([...selectedStates]);
      setStatesToChart([...statesToChart]);
    }
  }, [dataChart]);
  
  let callDataChart = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/region/data/states`, {})
    .then(res => {
      setDataChart(res.data);
    });
  }
  
  let stateChange = (newValue) => {
    setStateValue(newValue);
  };

  let handleClick = () => {
    if(stateValue === "")
      return;

		let stateIndex = states.findIndex( (state) => {
      if(state.title === stateValue) {
        return true;
      }
    })

    if(!statesBool[stateIndex]) {
      statesBool[stateIndex] = true;
      setstatesBool([...statesBool]);
      setSelectedStates([...selectedStates, states[stateIndex]]);
      setStatesToChart([...statesToChart, dataChart[stateIndex]]);
    }
  }

  let handleDelete = (id) => {
    if(selectedStates.length < 2)
      return; 

    let statesIndex = selectedStates.findIndex( (state) => {
      if(state.id === id)
        return true
    })
    
    selectedStates.splice(statesIndex, 1);
    setSelectedStates([...selectedStates]);

    statesIndex = statesToChart.findIndex( (state) => {
      if(state.id === id)
        return true
    })

    statesToChart.splice(statesIndex, 1);
    setStatesToChart([...statesToChart]);

    statesIndex = states.findIndex( (state) => {
      if(state.id === id)
        return true
    })

    statesBool[statesIndex] = false;
    setstatesBool(statesBool);
  }

  let addAll = () => {
    setstatesBool(Array(33).fill(true));
    setSelectedStates([...states]);
    setStatesToChart([...dataChart]);
  }

  let deleteAll = () => {
    let arr = new Array(32).fill(false);
    arr.push(true);
    setstatesBool(arr);
    setSelectedStates([states[32]]);
    setStatesToChart([dataChart[32]]);
  }

  return {
    statesToChart,
    selectedStates,
    dataChart,
    states,
    handleClick,
    handleDelete,
    stateValue,
    stateChange,
    addAll,
    deleteAll
  }
}

export default useRegion;