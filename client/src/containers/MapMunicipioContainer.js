import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';
import { MapContext } from '../contexts/MapContext';
import * as colors from './../constants/colors';
import { numberWithCommas } from '../Utils/numberWCommas';

const useMapMunicipio = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;
    const [munGEOJSON, setMunGEOJSON] = React.useState(null);
    const mapRef = React.useRef(null);
    const [map, setMap] = React.useState(null);
    const thresholdColor = {
        "decesos": ['#eff3ff','#bdd7e7','#6baed6','#2171b5'],
        "confirmados": ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594'],
        "pruebas": ['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
    };
    const [thresholdsNum, setThresholdNum] = React.useState({
    "confirmados": [],
    "decesos": [],
    })

    const {
        isMapMunicipio,
        stateSelected,
        state
    } = React.useContext(MapContext);

    const {
        munData,
        selectedLabel
    } = React.useContext(HomeContext);
    
    React.useEffect(() => {
        if(isMapMunicipio) {
            setMap(
                new mapboxgl.Map({
                container: mapRef.current,
                style: 'mapbox://styles/mildredg/ck9knxgnc1ozk1iqa5eog5o94',
                center: [-97.8116, 24.6040],
                zoom : 4.2
            }));
        }
    }, [isMapMunicipio])

    React.useEffect(() => {
        if(map && map.loaded() && stateSelected) {
            setMunGEOJSON(null);
            callMunGEOJSON(stateSelected);
        }
    }, [stateSelected])

    React.useEffect(() => {
        if(map) {
            var nav = new mapboxgl.NavigationControl();
            map.on('load', function() {
                if(!munGEOJSON) {
                    callMunGEOJSON(stateSelected);
                }

                map.addControl(nav, 'bottom-right');
            })
        }
    }, [map]);

    React.useEffect(() => {
        console.log("data fetched", munGEOJSON, munData);
        if(munData && munGEOJSON && munData.length == munGEOJSON.features.length) {  
            let fillColor = getSteps(selectedLabel);
            console.log(stateSelected);
            let geojson = setUpGEOJson();
            //console.log(geojson);
            //console.log(fillColor);
            if(map.getLayer("pref") !== undefined) {
                map.removeLayer('pref');
            }

            if(map.getSource("pref") !== undefined) {
                console.log(map.getSource("pref"))
                map.removeSource('pref');
            }
            
            map.addSource('pref', {
                type: 'geojson',
                data: geojson
            });
            
            map.addLayer({
                'id': 'pref',
                'type': 'fill',
                'source': 'pref',
                'paint': {
                'fill-color': fillColor,
                'fill-opacity': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1,
                    1,
                ],
                'fill-outline-color': '#000'
                }
            });
        
          //map.on('mousemove', showPopup);
          //map.on('click', 'pref', openMapContainer);
          
        }
      }, [munGEOJSON, munData]);

    let callMunGEOJSON = (stateSelected)  => {
        axios.get(`${process.env.REACT_APP_API_URL}/map/municipality/find/CVE_ENT?cve_ent=${stateSelected}`, {})
        .then(res => {
            setMunGEOJSON(res.data);
        });
    }

    let setUpGEOJson = () => {
        console.log(munGEOJSON)
        let geojson = munGEOJSON;
        geojson.features = geojson.features.sort((a,b) => a.properties.CVE_ENT - b.properties.CVE_ENT);
        for (let index = 0; index < munData.length; index++) {
            for (const confIndex in munData[index].confirmados) {
                geojson.features[index].properties["confirmados-" + munData[index].confirmados[confIndex].date] = Number(munData[index].confirmados[confIndex].count);
                geojson.features[index].properties["decesos-" + munData[index].decesos[confIndex].date] = Number(munData[index].decesos[confIndex].count);
                geojson.features[index].properties["pruebas-" + munData[index].pruebas[confIndex].date] = Number(munData[index].pruebas[confIndex].count);
            }
        }
        return geojson;
    }

    let getSteps = (label) => {
        let data;
        
        let dateNumber = 16;
        data = munData.map((mun, index) => {
            return mun[label][dateNumber].count;
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
            property: label + "-" + "17/04/2020",
            stops: stepsList
        };
        
        thresholdsNum[label] = thresholdsNumLabel;
        setThresholdNum(thresholdsNum);

        return fillColor;
    }

  return {
    callMunGEOJSON,
    mapRef
  }
}

export default useMapMunicipio;