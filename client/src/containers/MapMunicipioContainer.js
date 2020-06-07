import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';
import { MapContext } from '../contexts/MapContext';
import * as colors from './../constants/colors';
import { numberWithCommas } from '../Utils/numberWCommas';
import  { FITBOUNDS } from '../constants/statesLimits';

const useMapMunicipio = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

    const [munGEOJSON, setMunGEOJSON] = React.useState(null);
    const mapRef = React.useRef(null);
    const [geojson, setGeojson] = React.useState(null);
    const [fillColor, setFillColor] = React.useState(null);
    const [selectedMun, setSelectedMun] = React.useState(null);
    const [ bounds, setBounds] = React.useState(FITBOUNDS["09"].limites);
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
        state,
        selectedLabel
    } = React.useContext(HomeContext);
    
    React.useEffect(() => {
        if(stateSelected) {
            setMunGEOJSON(null);
            callMunGEOJSON(stateSelected.cve_ent);
            setBounds(FITBOUNDS[stateSelected.cve_ent].limites);
        }
    }, [stateSelected])
    
    React.useEffect(() => {
        console.log(viewport)
    }, [viewport])

    React.useEffect(() => {
        if(state.date && munData && munGEOJSON && selectedLabel && munGEOJSON.features[0].properties.CVE_ENT == munData[0].cve_ent) {  
            setFillColor(getSteps(selectedLabel));
            setUpGEOJson();
        }
    }, [munGEOJSON, munData, state, selectedLabel]);

    let callMunGEOJSON = (cve_ent)  => {
        axios.get(`${process.env.REACT_APP_API_URL}/map/municipality/find/CVE_ENT?cve_ent=${cve_ent}`, {})
        .then(res => {
            setMunGEOJSON(res.data);
        });
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

  return {
    callMunGEOJSON,
    mapRef,
    selectedMun,
    fillColor,
    geojson,
    viewport,
    setViewport,
    bounds
  }
}

export default useMapMunicipio;