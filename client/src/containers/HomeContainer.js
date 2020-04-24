import React from 'react';
import axios from 'axios';

const useHome = () => {
  const [statesConfirm, setStatesConfirm] = React.useState(null);
  const [statesDeads, setStatesDeads] = React.useState(null);
  const [state, setState ] = React.useState({
    date: '',
    shortDate: '',
    dates : null,
    states : null
  })
  const[rowsTable, setRowsTable] = React.useState([]);
  const[rows, setRows] = React.useState([]);
  const [dataChart, setDataChart] = React.useState([]);
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  
  React.useEffect(() => {
    callStatesConfirm();
    callStatesDeads();
  }, []);

  React.useEffect(() => {
    if(statesConfirm && statesDeads) {
      let states = statesConfirm.map(t => t.estado );
      let dates = [];
      var single_date;

      for (single_date in statesConfirm[0].confirmados) {
        dates.push(single_date);
      }

      let date = single_date;
      
      let shortDate = new Date(date);
      shortDate = `${shortDate.getDate()}/${shortDate.getMonth() + 1}`
    
      let rowsConfirm = [];
      let rowsDeads = [];

      let confirmData = [...statesConfirm];
      confirmData.sort((a,b) => b.confirmados[date] -a.confirmados[date]);
      for(var i = 0; i < confirmData.length; i++) {
        rowsConfirm.push(createTableData(i+1, confirmData[i].estado, Number(confirmData[i].confirmados[date])));
      }
      
      let deadsData = [...statesDeads];
      deadsData.sort((a,b) => b.sospechosos[date] -a.sospechosos[date]);
      for(var i = 0; i < deadsData.length; i++) {
        rowsDeads.push(createTableData(i+1, deadsData[i].estado, Number(deadsData[i].sospechosos[state.date])));
      } 

      onSelectLabel("confirmados");

      setState({
        date : date,
        shortDate: shortDate,
        dates : dates,  
        states : states
      })
    }
  }, [statesConfirm, statesDeads]);

  React.useEffect(() => {
    if(state && state.date && statesConfirm && statesDeads) {
      if(dataChart.length == 0)
        setDataChart([createChartData(statesConfirm, "confirmados"),createChartData(statesDeads, "sospechosos")]);
      
      let rowsConfirm = [];
      let rowsDeads = [];
      let confirmData = [...statesConfirm];
      
      confirmData.sort((a,b) => b.confirmados[state.date] - a.confirmados[state.date]);
      
      for(var i = 0; i < confirmData.length; i++) {
        //update just the last number
        rowsConfirm.push(createTableData(i+1, confirmData[i].estado, Number(confirmData[i].confirmados[state.date])));
      }

      let deadsData = [...statesDeads];
      deadsData.sort((a,b) => b.sospechosos[state.date] -a.sospechosos[state.date]);
      for(var i = 0; i < deadsData.length; i++) {
        //update just the last number
        rowsDeads.push(createTableData(i+1, deadsData[i].estado, Number(deadsData[i].sospechosos[state.date])));
      }

      setRowsTable([rowsConfirm, rowsDeads]);
    }
  }, [state]);

  
  React.useEffect(() => {
    if(selectedLabel && rowsTable.length > 0) {
      setRows(rowsTable[selectedLabel === "confirmados" ? 0 : 1]);
    }
  }, [rowsTable, selectedLabel]);

  let callStatesConfirm = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/data/confirmados`, {})
    .then(res => {
      setStatesConfirm(res.data);
    });
  }

  let callStatesDeads = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/data/sospechosos`, {})
    .then(res => {
      setStatesDeads(res.data);
    });
  }
  
  let createTableData = (position, state, data) => {
    return { position, state, data };
  }

  let createChartData = (data, label) => {
    let dataChart = [];
    let casos, shortDate;
    for (var single_date of state.dates) {
      casos = 0;
      data.forEach(element => {
        casos += Number(element[label][single_date]);
      });

      dataChart.push(chartPoint(single_date, casos));
    }

    return {
      id: label,
      data: dataChart
    }
  }

  let chartPoint = (x, y) =>{
    return {x, y}
  }

  let changeDate = (e, pos) => {
    let date = state.dates[pos];
    let shortDate = new Date(date);
    shortDate = `${shortDate.getDate()}/${shortDate.getMonth() + 1}`
    
    setState({
      ...state,
      date: date,
      shortDate: shortDate
    })
  }

  let onSelectLabel = (selected) => {
    setSelectedLabel(selected);
  }

  return {
    statesConfirm,
    statesDeads,
    state,
    rows,
    dataChart,
    changeDate,
    onSelectLabel,
    selectedLabel
  }
}

export default useHome;