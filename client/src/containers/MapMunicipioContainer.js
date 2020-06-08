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
    const [fillColor, setFillColor] = React.useState(null);
    const [selectedMun, setSelectedMun] = React.useState(null);
    const [ bounds, setBounds] = React.useState(null);
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
        selectedLabel
    } = React.useContext(HomeContext);
    
    React.useEffect(() => {
        if(stateSelected) {
            setSelectedMun(null);
            setMunGEOJSON(null);
            callMunGEOJSON(stateSelected.cve_ent);
        }
    }, [stateSelected])
    
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
            console.log(munData)
            /*if ( selectedLabel == "confirmados") {
                munData.sort((a,b) => b.confirmados[state.dateIndex].count - a.confirmados[state.dateIndex].count)
            } else {
                munData.sort((a,b) => b.decesos[state.dateIndex].count - a.decesos[state.dateIndex].count)
            }*/
            console.log(munData)
        }
    }, [munGEOJSON, munData, state, selectedLabel]);

    let callMunGEOJSON = (cve_ent)  => {
        axios.get(`${process.env.REACT_APP_API_URL}/map/municipality/find/CVE_ENT?cve_ent=${cve_ent}`, {})
        .then(res => {
            setMunGEOJSON(res.data);
        });
    }

    let binarySearch = (inf, sup, val, arr) => {
        if ( inf > sup){
          console.log(sup, inf)
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
        let geojson = munGEOJSON;
        for (let index = 0; index < munData.length; index++) {
            for (const confIndex in munData[index].confirmados) {
                geojson.features[index].properties["confirmados#" + munData[index].confirmados[confIndex].date] = Number(munData[index].confirmados[confIndex].count);
                geojson.features[index].properties["decesos#" + munData[index].decesos[confIndex].date] = Number(munData[index].decesos[confIndex].count);
                geojson.features[index].properties["pruebas#" + munData[index].pruebas[confIndex].date] = Number(munData[index].pruebas[confIndex].count);
            }
        }
        setGeojson(geojson);
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
        if (event.features.length > 0 && munData) {
            console.log(munData)
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

  return {
    callMunGEOJSON,
    mapRef,
    selectedMun,
    fillColor,
    geojson,
    viewport,
    setViewport,
    bounds,
    onClick,
    selectedMun,
    thresholdsNum
  }
}

export default useMapMunicipio;