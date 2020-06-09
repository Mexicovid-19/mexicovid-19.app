import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';
import { MapContext } from '../contexts/MapContext';
import * as colors from './../constants/colors';
import { numberWithCommas } from '../Utils/numberWCommas';
import  { FITBOUNDS_VIEWPORT } from '../constants/statesLimits';

const useMapMunicipio = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

    const [munGEOJSON, setMunGEOJSON] = React.useState(null);
    const mapRef = React.useRef(null);
    const [geojson, setGeojson] = React.useState(null);
    const [geojsonformun, setGeojsonformun] = React.useState(null);
    const [fillColor, setFillColor] = React.useState(null);
    const [selectedMun, setSelectedMun] = React.useState(null);
    const [munDataChart, setMunDataChart] = React.useState(null);
    const [ bounds, setBounds] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const thresholdColor = {
        "decesos": ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d'],
        "confirmados": ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594'],
        "pruebas": ['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
    }; 
    const [thresholdsNum, setThresholdNum] = React.useState({
    "confirmados": [],
    "decesos": [],
    })
    const [viewport, setViewport] = React.useState({
        longitude: -100.8116,
        latitude: 24.6040,
        zoom: 3.2
    });

    const {
        stateSelected
    } = React.useContext(MapContext);

    const {
        munData,
        setMunData,
        state,
        selectedLabel,
        PROMEDIO_MOVIL
    } = React.useContext(HomeContext);
    
    React.useEffect(() => {
        if(stateSelected) {
            setSelectedMun(null);
            setMunGEOJSON(null);
            callMunGEOJSON(stateSelected.cve_ent);
            setIsLoading(true);
        }
    }, [stateSelected])

    React.useEffect(() => {
        if( selectedMun && state) {
            let index = selectedMun.rankingEstatal - 1; //munData is ordered
            let data = [munData[index]]
            var { newCases, prom } = stateChart(cleanData(data, "decesos", state.countDates, state.dates));
            let d = newCases;
            let dp = prom;
            var { newCases, prom } = stateChart(cleanData(data, "confirmados", state.countDates, state.dates));
            let c = newCases;
            let cp = prom;
            setMunDataChart([[{id:"decesos por dia",data:d,}, { id:"promedio movil de 5 días",data:dp}], [{id:"confirmados por día",data:c}, {id:"promedio movil de 5 días",data:cp}]]);
            
        }
    }, [selectedMun]);
    
    React.useEffect(() => {
        if(state.date && munData && munGEOJSON && selectedLabel && munGEOJSON.features[0].properties.CVE_ENT == munData[0].cve_ent) {  
            setFillColor(getSteps(selectedLabel));
            setUpGEOJson();
            setViewport({
                ...viewport,
                latitude: FITBOUNDS_VIEWPORT[munGEOJSON.features[0].properties.CVE_ENT].viewport.latitude,
                longitude: FITBOUNDS_VIEWPORT[munGEOJSON.features[0].properties.CVE_ENT].viewport.longitude,
                zoom: FITBOUNDS_VIEWPORT[munGEOJSON.features[0].properties.CVE_ENT].viewport.zoom,
            })

            //sortMunData
            let fecha = state.dateIndex;
            if ( selectedLabel == "confirmados") {
                munData.sort((a,b) => b.confirmados[fecha].count - a.confirmados[fecha].count)
            } else {
                munData.sort((a,b) => b.decesos[fecha].count - a.decesos[fecha].count)
            }
            
            setIsLoading(false)
        }
    }, [munGEOJSON, munData, state, selectedLabel]);

    let callMunGEOJSON = (cve_ent)  => {
        axios.get(`${process.env.REACT_APP_API_URL}/map/municipality/find/CVE_ENT?cve_ent=${cve_ent}`, {})
        .then(res => {
            setMunGEOJSON(res.data);
        });
    }

    let binarySearch = (inf, sup, val, arr) => {
        if ( inf >= sup){
          return sup < 0 ? 0: sup;
        }
        else {
            var mid = inf + Math.floor((sup - inf) /2);
            if(arr[mid].properties.CVE_MUN == val) {
              return mid;
            } else if( arr[mid].properties.CVE_MUN < val) {
              return binarySearch(mid + 1, sup, val, arr)
            } else {
              return binarySearch(inf, mid - 1, val, arr)
            }
        }
    }    

    let setUpGEOJson = () => {
        let _geojson = munGEOJSON;
        let geojsonOrdered = [];
        let dataCveMun = munData.map(el => Number(el.cve_mun))
        for( var cveMunIndex in dataCveMun) {
        let index = binarySearch(0, _geojson.features.length - 1, dataCveMun[cveMunIndex], _geojson.features)
            
            if ( index >= 0 ) {
                for(var j in state.dates) {
                    _geojson.features[index].properties["confirmados#" + state.dates[j]] = Number(munData[cveMunIndex].confirmados[j].count);
                    _geojson.features[index].properties["decesos#" + state.dates[j]] = Number(munData[cveMunIndex].decesos[j].count);
                    _geojson.features[index].properties["pruebas#" + state.dates[j]] = Number(munData[cveMunIndex].pruebas[j].count);
                }
                geojsonOrdered.push(_geojson.features[index])
                _geojson.features.splice(index,1)
            } 
        }
        
        _geojson.features = geojsonOrdered
        setGeojson(_geojson);
    }

    let getSteps = (label) => {
        let data;
        
        data = munData.map((mun, index) => {
            return mun[label][state.dateIndex].count;
        });
        
        data.sort((a,b) => a - b);
        
        let threshold = Math.floor(data.length / 4);
        let thresholdsNumLabel = [];
        for(var step = 0; step < 4; step++) {
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
    
    let getVulnerability = ( indice ) => {
        switch (indice) {
            case 3:
                return "Alto"
                break;
            case 2:
                return "Medio"
                break;
            case 1:
                return "Bajo"
                break;
            
            default:
                return "No Disponible"
                break;
        }
    }

    const onClick = (event) => {
        if (event.features.length > 0 && munData ) {
            let cve_mun      = event.features[0].properties.CVE_MUN;
            let nombre       = event.features[0].properties.NOM_MUN;
            let indexMun     = munData.findIndex(edo => edo.cve_mun == cve_mun);
            let previousDate = state.dates[state.dateIndex - 1 > -1 ? state.dateIndex - 1 : 0]
            let totales      = event.features[0].properties[selectedLabel + "#" + state.date]
            let nuevos       = totales - event.features[0].properties[selectedLabel + "#" + previousDate]
            
            setSelectedMun({
                data          : event.features[0].properties,
                nombre        : nombre,
                poblacion     : munData[indexMun].poblacion,
                rankingEstatal: indexMun + 1,
                rankingNacion : indexMun + 1,
                totales       : totales,
                nuevos        : nuevos,
                pruebas       : event.features[0].properties["pruebas#" + state.date],
                indice        : getVulnerability(munData[indexMun].indice_vulnerabilidad)
            });
        }
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

    let stateChart = (content) => {
        let { data } = content;
        let newCases = getNewCases(data);
        let prom = getProm(newCases);
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
        let batches = Math.floor(data.length / PROMEDIO_MOVIL);
        let prom = []

        for(var batch = 0; batch < batches; batch++) {
            let start = batch*PROMEDIO_MOVIL;
            let end = start + PROMEDIO_MOVIL;
            prom.push(chartPoint(data[start].x, data.slice(start,end).reduce((a,{y}) =>  a + y, 0) / PROMEDIO_MOVIL));

            if( data.length - end < PROMEDIO_MOVIL && data.length > end) {
                let prom_movil = data.length - end;
                start = end + 1;
                end = data.length;
                console.log(start, end, data)
                prom.push(chartPoint(data[end - 1].x, data.slice(start,end).reduce((a,{y}) =>  a + y, 0) / prom_movil));
            }
        }
        
        return prom;
    }

  return {
    callMunGEOJSON,
    mapRef,
    selectedMun,
    setSelectedMun,
    fillColor,
    geojson,
    viewport,
    setViewport,
    bounds,
    onClick,
    thresholdsNum,
    munGEOJSON,
    isLoading,
    munDataChart
  }
}

export default useMapMunicipio;