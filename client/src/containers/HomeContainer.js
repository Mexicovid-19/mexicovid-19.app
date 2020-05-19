import React from 'react';
import axios from 'axios';

const useHome = () => {
  const [stateData, setStateData] = React.useState(null);
  const [statesConfirm, setStatesConfirm] = React.useState(null);
  const [statesDeads, setStatesDeads] = React.useState(null);
  const [state, setState ] = React.useState({
    date: '',
    shortDate: '',
    dates : null,
    states : null,
    stateInfo: null,
    confirmData: [],
    deadData: [],
    countDates: 0,
  })
  const [munData, setMunData] = React.useState(null);
  const[rowsTable, setRowsTable] = React.useState([]);
  const[rows, setRows] = React.useState([]);
  const [dataChart, setDataChart] = React.useState([]);
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const [isMap, setIsMap] = React.useState(false);
  
  React.useEffect(() => {
    callStatesConfirm();
    callStatesDeads();
    callStatesData();
  }, []);

  React.useEffect(() => {
      if ( stateData ) {
        let confirmData = [];
        let deadData = [];
        let rowsConfirm = [];
        let rowsDeads = [];

        //dates array
        let dates = stateData[0].confirmados.map( data => data.date);
        let last_date = dates.slice(-1)[0];
        
        onSelectLabel("confirmados");
        let _state = {
          date: last_date,
          dateIndex: dates.length - 1,
          countDates: dates.length,
          dates : dates
        }
        setState(_state)
        
        if(dataChart.length == 0)
          setDataChart([createChartData(stateData, "decesos", _state.countDates, _state.dates),createChartData(stateData, "confirmados", _state.countDates, _state.dates)]);

        console.log([createChartData(stateData, "decesos", _state.countDates, _state.dates),createChartData(stateData, "confirmados", _state.countDates, _state.dates)]);
      }
    /*if(statesConfirm && statesDeads) {
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
      deadsData.sort((a,b) => b.decesos[date] -a.decesos[date]);
      for(var i = 0; i < deadsData.length; i++) {
        rowsDeads.push(createTableData(i+1, deadsData[i].estado, Number(deadsData[i].decesos[state.date])));
      } 

      onSelectLabel("confirmados");

      setState({
        date : date,
        shortDate: shortDate,
        dates : dates,  
        states : states
      })
    }*/
  }, [stateData]);

  React.useEffect(() => {
    if(state && state.date) {
        let rowsDeads = [];
        let rowsConfirm = [];
        stateData.sort((a,b) => b.confirmados[state.dateIndex].count - a.confirmados[state.dateIndex].count);
        let confirmData = stateData.map(s => ({"estado": s.nombre, "confirmados": s.confirmados}))
        console.log(confirmData)
        for(var i = 0; i < confirmData.length; i++) {
          //update just the last number
          rowsConfirm.push(createTableData(i+1, confirmData[i].estado.toLowerCase(), Number(confirmData[i].confirmados[state.dateIndex].count)));
        }

        stateData.sort((a,b) => b.confirmados[state.dateIndex].count - a.confirmados[state.dateIndex].count);
        let deadData = stateData.map(s => ({"estado": s.nombre, "decesos": s.decesos}))
        console.log(deadData)
        deadData.sort((a,b) => b.decesos[state.dateIndex] -a.decesos[state.dateIndex]);
        for(var i = 0; i < deadData.length; i++) {
          //update just the last number
          rowsDeads.push(createTableData(i+1, deadData[i].estado.toLowerCase(), Number(deadData[i].decesos[state.dateIndex].count)));
        }

        setRowsTable([rowsConfirm, rowsDeads]);
      /*if(dataChart.length == 0)
        setDataChart([createChartData(statesDeads, "decesos"),createChartData(statesConfirm, "confirmados")]);
      
      let rowsConfirm = [];
      let rowsDeads = [];
      let confirmData = [...statesConfirm];
      
      confirmData.sort((a,b) => b.confirmados[state.date] - a.confirmados[state.date]);
      
      for(var i = 0; i < confirmData.length; i++) {
        //update just the last number
        rowsConfirm.push(createTableData(i+1, confirmData[i].estado, Number(confirmData[i].confirmados[state.date])));
      }

      let deadsData = [...statesDeads];
      deadsData.sort((a,b) => b.decesos[state.date] -a.decesos[state.date]);
      for(var i = 0; i < deadsData.length; i++) {
        //update just the last number
        rowsDeads.push(createTableData(i+1, deadsData[i].estado, Number(deadsData[i].decesos[state.date])));
      }

      setRowsTable([rowsConfirm, rowsDeads]);*/
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
    axios.post(`${process.env.REACT_APP_API_URL}/map/data/decesos`, {})
    .then(res => {
      setStatesDeads(res.data);
    });
  }

  let callStatesData = ()  => {
    axios.get(`${process.env.REACT_APP_API_URL}/estado/todos`, {})
    .then(res => {
      setStateData(res.data);
    });
  }

  let callMunData = (cve_ent)  => {
    axios.get(`${process.env.REACT_APP_API_URL}/municipio/${cve_ent}`, {})
    .then(res => {
      setMunData(res.data);
    });
  }
  
  let createTableData = (position, state, data) => {
    return { position, state, data };
  }

  let createChartData = (data, label, datesLen, dates) => {
    let dataChart = [];
    let casos;
    for(var i = 0; i < datesLen; i++){
      casos = 0;
      data.forEach(element => {
        casos += Number(element[label][i].count);
      });

      dataChart.push(chartPoint(dates[i], casos));
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
    let dateIndex = pos;
    setState({
      ...state,
      date,
      dateIndex
    })
  }

  let onSelectLabel = (selected) => {
    setSelectedLabel(selected);
  }

  let onChangeTab = (bool) => {
    setIsMap(bool);
  }

  return {
    statesConfirm,
    statesDeads,
    state,
    rows,
    dataChart,
    changeDate,
    onSelectLabel,
    selectedLabel,
    isMap,
    onChangeTab,
    callMunData,
    munData
  }
}

export default useHome;