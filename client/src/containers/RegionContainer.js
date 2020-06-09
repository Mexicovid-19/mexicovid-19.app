import React from 'react';
import axios from 'axios';
import { STATE_COLORS } from '../constants/states';
import { getUrlParams } from '../Utils/tools';

const genStates = (title, id, color) => {
  return {title, id, color};
}

const useRegion = () => {
  const [states, setStates] = React.useState([]);
  const [dataChart, setDataChart] = React.useState([]);
  
  const [statesBool, setstatesBool] = React.useState(Array(33).fill(false));

  const [statesToChart, setStatesToChart] = React.useState([]);
  const [selectedStates, setSelectedStates] = React.useState([]);
  
  const [stateValue, setStateValue] = React.useState("");
  const [nationalIndex, setNationalIndex] = React.useState(0);
  const [isState, setIsState] = React.useState(true);
  
  React.useEffect(() => {
    callDataChart();

    let params = getUrlParams();
    if( typeof(params.show) !== "undefined") {
      setIsState(params.show == "States");
    }
  }, []);

  React.useEffect(() => {
    if( dataChart.length > 0 ) {
      
      let _states = [];
      for(var state in dataChart) {
        let {title, color} = STATE_COLORS[dataChart[state].id];
        _states.push(genStates(title, dataChart[state].id, color));

        if( dataChart[state].id == "NACIONAL") {
          setNationalIndex(state);
        }
      }
      
      setStates(_states);
    }
  }, [dataChart]);

  React.useEffect(() => {
    if( states.length > 0 ) {
      
      for(var state in states) {
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
  }, [states]);

  
	let changeState = () => {
		setIsState(!isState);
	};
  
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
    setSelectedStates([states[nationalIndex]]);
    setStatesToChart([dataChart[nationalIndex]]);
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
    deleteAll,
    changeState,
    isState
  }
}

export default useRegion;