import React from 'react';
import axios from 'axios';

const useApp = () => {
  const [statesConfirm, setStatesConfirm] = React.useState(null);
  const [statesSuspicious, setStatesSuspicious] = React.useState(null);
  const [state, setState ] = React.useState({
    date: '',
    dates : null,
    states : null
  })

  React.useEffect(() => {
    callStatesConfirm();
    callStatesSuspicious();
  }, []);

  React.useEffect(() => {
    if(statesConfirm) {
      let states = statesConfirm.map(t => t.estado );
      let dates = [];
      var single_date;

      for (single_date in statesConfirm[0].confirmados) {
        dates.push(single_date);
      }

      let date = single_date;

      setState({
        date : date,
        dates : dates,  
        states : states
      })
    }
  }, [statesConfirm]);

  let callStatesConfirm = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/data/confirmados`, {})
    .then(res => {
      setStatesConfirm(res.data);
    });
  }

  let callStatesSuspicious = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/data/sospechosos`, {})
    .then(res => {
      setStatesSuspicious(res.data);
    });
  }

  let changeDate = (e, pos) => {
    let date = state.dates[pos];
    
    setState({
      ...state,
      date: date
    })
  }

  return {
    statesConfirm,
    statesSuspicious,
    state,
    changeDate
  }
}

export default useApp;