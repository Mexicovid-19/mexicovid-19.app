import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';

const useMap = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  const [fillColor, setFillColor] = React.useState(null);
  const [geojson, setGeojson] = React.useState(null);
  const [statesGeOJSON, setStatesGeOJSON] = React.useState(null);
  const thresholdColor = {
    "decesos": ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d'],
    "confirmados": ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594'],
    "pruebas": ['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
  };
  const [thresholdsNum, setThresholdNum] = React.useState({
    "confirmados": [],
    "decesos": [],
  })
  const isMobile = window.innerWidth < 1000;
  const [isMapMunicipio, setIsMapMunicipio] = React.useState(false);
  const [stateSelected, setStateSelected] = React.useState(null);
  const {
         selectedLabel, 
         state,
        isMap,
        callMunData,
        stateData
  } = React.useContext(HomeContext);
  
  React.useEffect(() => {
    callStatesGEOJSON();
  }, []);

  React.useEffect(() => {
    if(state.date && stateData && statesGeOJSON && statesGeOJSON.features.length == 32) {  
      setFillColor(getSteps(selectedLabel));
      setUpGEOJson();
      
      if ( selectedLabel == "confirmados") {
        stateData.sort((a,b) => b.confirmados[state.dateIndex].count - a.confirmados[state.dateIndex].count);
      } else {
        stateData.sort((a,b) => b.decesos[state.dateIndex].count - a.decesos[state.dateIndex].count);
      }

      if( stateSelected ) {
        let data = stateSelected.data;
        let cve_ent = String(data.CVE_ENT);
        cve_ent = cve_ent.length == 1 ? "0" + cve_ent : cve_ent;
        let nombre = data.ESTADO;
        let indexState = stateData.findIndex(edo => edo.cve_ent == cve_ent);
        let previousDate = state.dates[state.dateIndex - 1 > -1 ? state.dateIndex - 1 : 0]
        let totales = data[selectedLabel + "#" + state.date]
        let nuevos = totales - data[selectedLabel + "#" + previousDate]
      
        setStateSelected(
          {
            data,
            cve_ent,
            nombre: nombre.slice(0,1) + nombre.slice(1).toLowerCase(),
            abrev: data.ABREV,
            poblacion: stateData[indexState].poblacion,
            ranking: indexState + 1,
            totales: totales,
            nuevos: nuevos,
            pruebas: data["pruebas#" + state.date]
          }
        );
      }
    }
  }, [selectedLabel, statesGeOJSON, stateData, state]);

  React.useEffect(() => {
    if(map && map.loaded() && map.isStyleLoaded()) {
      map.resize();
    }
  }, [isMap]);

  React.useEffect(() => {
    if(stateSelected) {
      callMunData(stateSelected.cve_ent);
    }
  }, [stateSelected])

  let callStatesGEOJSON = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/states`, {})
    .then(res => {
      setStatesGeOJSON(res.data);
    });
  }

  let getSteps = (label) => {
    let thresholdsNumLabel = [];
    
    let data = stateData.map(stateMex => {
      return stateMex[label][state.dateIndex].count; 
    });
    
    data.sort((a,b) => a - b);
    let threshold = Math.floor(data.length / 8);
    for(var step = 0; step < 8; step++) {
      thresholdsNumLabel.push(data[step*threshold])
    }
    
    let stepsList = thresholdsNumLabel.map((num, i) => {
        return [Number(num), thresholdColor[label][i]];
    });
    
    let fillColor = {
      property: label + "#" + state.date,
      stops: stepsList
    };

    thresholdsNum[label] = thresholdsNumLabel;
    setThresholdNum(thresholdsNum);
    return fillColor;
  }

  let binarySearch = (inf, sup, val, arr) => {
    if ( inf > sup){
      return sup < 0 ? 0: sup;
    }
    else {
      var mid = inf + Math.floor((sup - inf) /2);
        if(arr[mid].properties.CVE_ENT == val) {
          return mid;
        } else if( arr[mid].properties.CVE_ENT < val) {
          return binarySearch(mid + 1, sup, val, arr)
        } else {
          return binarySearch(inf, mid - 1, val, arr)
        }
    }
  }

  let setUpGEOJson = () => {
    let _geojson = JSON.parse(JSON.stringify(statesGeOJSON));;
    let geojsonOrdered = [];
    let dataCveEnt = stateData.map(el => Number(el.cve_ent))
    
    for( var cveEntIndex in dataCveEnt) {
      let index = binarySearch(0, _geojson.features.length, dataCveEnt[cveEntIndex], _geojson.features)
    
      if ( index >= 0 ) {
        for(var j in state.dates) {
          _geojson.features[index].properties["confirmados#" + state.dates[j]] = Number(stateData[cveEntIndex].confirmados[j].count);
          _geojson.features[index].properties["decesos#" + state.dates[j]] = Number(stateData[cveEntIndex].decesos[j].count);
          _geojson.features[index].properties["pruebas#" + state.dates[j]] = Number(stateData[cveEntIndex].pruebas[j].count);
        }
        geojsonOrdered.push(_geojson.features[index])
        _geojson.features.splice(index,1)
      } 
    }
    
    _geojson.features = geojsonOrdered
    
    setGeojson(_geojson);
  }

  let closeMapContainer = (e) => {
    setIsMapMunicipio(false);
  }

  return {
    mapRef,
    map,
    thresholdsNum,
    stateSelected,

    closeMapContainer,
    isMapMunicipio,

    statesGeOJSON,
    fillColor,
    geojson,
    setStateSelected,
    setIsMapMunicipio
  }
}

export default useMap;