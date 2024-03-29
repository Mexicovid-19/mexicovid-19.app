import React from 'react';
import axios from 'axios';

const useHome = () => {
  const PROMEDIO_MOVIL = 5;
  const [munDataArr, setMunDataArr] = React.useState({});
  const [stateData, setStateData] = React.useState(null);
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
  const [nationalDataChart, setNationalDataChart] = React.useState([]);
  const [stateDataChart, setStateDataChart] = React.useState([]);
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const [isMap, setIsMap] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  React.useEffect(() => {
    callStatesData();
  }, []);

  React.useEffect(() => {
      if ( stateData ) {
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
          setDataChart([cleanData(stateData, "decesos", _state.countDates, _state.dates),cleanData(stateData, "confirmados", _state.countDates, _state.dates)]);
        if(nationalDataChart.length == 0){
          var { newCases, prom } = stateChart(cleanData(stateData, "decesos", _state.countDates, _state.dates));
          let d = newCases.slice(1);
          let dp = prom;
          var { newCases, prom } = stateChart(cleanData(stateData, "confirmados", _state.countDates, _state.dates));
          let c = newCases.slice(1);
          let cp = prom;
          setNationalDataChart([[{id:"decesos por día",data:d,}, { id:"promedio móvil de 5 días",data:dp}], [{id:"confirmados por día",data:c}, {id:"promedio móvil de 5 días",data:cp}]]);
        }
      }
  }, [stateData]);

  React.useEffect(() => {
    if ( munData ) {
      var { newCases, prom } = stateChart(cleanData(munData, "decesos", state.countDates, state.dates));
      let d = newCases.slice(1);
      let dp = prom;
      var { newCases, prom } = stateChart(cleanData(munData, "confirmados", state.countDates, state.dates));
      let c = newCases.slice(1);
      let cp = prom;
      setStateDataChart([[{id:"decesos por día",data:d,}, { id:"promedio móvil de 5 días",data:dp}], [{id:"confirmados por día",data:c}, {id:"promedio móvil de 5 días",data:cp}]]);
    }
}, [munData]);

  React.useEffect(() => {
    if(state && state.date) {
        let rowsDeads = [];
        let rowsConfirm = [];
        stateData.sort((a,b) => b.decesos[state.dateIndex].count - a.decesos[state.dateIndex].count);
        let deadData = stateData.map(s => ({"estado": s.abbrev, "decesos": s.decesos}))
        deadData.sort((a,b) => b.decesos[state.dateIndex] -a.decesos[state.dateIndex]);
        for(var i = 0; i < deadData.length; i++) {
          //update just the last number
          rowsDeads.push(createTableData(i+1, deadData[i].estado.toUpperCase(), Number(deadData[i].decesos[state.dateIndex].count)));
        }

        stateData.sort((a,b) => b.confirmados[state.dateIndex].count - a.confirmados[state.dateIndex].count);
        let confirmData = stateData.map(s => ({"estado": s.abbrev, "confirmados": s.confirmados}))
        for(var i = 0; i < confirmData.length; i++) {
          //update just the last number
          rowsConfirm.push(createTableData(i+1, confirmData[i].estado.toUpperCase(), Number(confirmData[i].confirmados[state.dateIndex].count)));
        }

        setRowsTable([rowsConfirm, rowsDeads]);
    }
  }, [state]);

  
  React.useEffect(() => {
    if(selectedLabel && rowsTable.length > 0) {
      setRows(rowsTable[selectedLabel === "confirmados" ? 0 : 1]);
    }
  }, [rowsTable, selectedLabel]);

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
      let _munObj = munDataArr;
      _munObj[cve_ent] = res.data;
      setMunDataArr(_munObj);
    });
  }
  
  let createTableData = (position, state, data) => {
    return { position, state, data };
  }

  let cleanData = (data, label, datesLen, dates) => {
    let _dataChart = [];
    let casos;
    for(var i = 0; i < datesLen; i++){
      casos = 0;
      data.forEach(element => {
        casos += Number(element[label][i].count);
      });

      _dataChart.push(chartPoint(dates[i], casos));
    }

    return {
      id: label,
      data: _dataChart
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

  let stateChart = (content) => {
    let { data } = content;
    let newCases = getNewCases(data);
    let prom = getProm(newCases.slice(1));
    return ({newCases, prom});
  }

  let getNewCases = (data) => {
    let newCases = []
    for(var dataIndex in data) {
      if(dataIndex == 0) {
        newCases.push(chartPoint(data[dataIndex].x, data[dataIndex].y))
      } else {
        newCases.push(chartPoint(data[dataIndex].x, data[dataIndex].y - data[dataIndex - 1].y))
      }
    }
    return newCases;
  }

  let getProm = (data) => {
    let len = data.length;
    let prom = [];
    for(var avg = 0; avg < len - 4; avg ++) {
      let start = avg;
      let end = start + PROMEDIO_MOVIL;
      let div = PROMEDIO_MOVIL;
      if( avg > len - PROMEDIO_MOVIL) {
          end = len;
          div = end - avg;
      }
      
      prom.push(chartPoint(data[start + 2].x, data.slice(start,end).reduce((a,{y}) =>  a + y, 0) / div));
    }

    return prom;
  }
  
  return {
    stateData, 
    state,
    rows,
    dataChart,
    changeDate,
    onSelectLabel,
    selectedLabel,
    isMap,
    onChangeTab,
    callMunData,
    munData,
    setMunData,
    nationalDataChart,
    stateDataChart,
    PROMEDIO_MOVIL,
    isExpanded,
    setIsExpanded
  }
}

export default useHome;