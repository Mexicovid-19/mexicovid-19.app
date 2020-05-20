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
    const [map, setMap] = React.useState(null);
    const [selectedMun, setSelectedMun] = React.useState(null);
    const[ popup , setPopup] = React.useState(new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, closeButton: false,className: 'popup-map' }));
    
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
        stateSelected
    } = React.useContext(MapContext);

    const {
        munData,
        state,
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
            callMunGEOJSON(stateSelected.cve_ent);
        }
    }, [stateSelected])

    React.useEffect(() => {
        if(map) {
            var nav = new mapboxgl.NavigationControl();
            map.on('load', function() {
                if(!munGEOJSON) {
                    callMunGEOJSON(stateSelected.cve_ent);
                }

                map.addControl(nav, 'top-right');
            })
        }
    }, [map]);

    React.useEffect(() => {
        if(munData && munGEOJSON && munData.length == munGEOJSON.features.length) {  
            let fillColor = state && state.date ? getSteps(selectedLabel) : '#FFF';
            let geojson = setUpGEOJson();
            
            if(map.getLayer("pref") !== undefined) {
                map.removeLayer('pref');
            }

            if(map.getSource("pref") !== undefined) {
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
        
          map.on('mousemove', showPopup);

          console.log(stateSelected.cve_ent);
          map.fitBounds(FITBOUNDS[stateSelected.cve_ent].limites); 
        
          //map.on('click', 'pref', openMapContainer);
          
        }
      }, [munGEOJSON, munData]);

      React.useEffect(() => {
        if(map && munData && state && state.date) {
          let fillColor = getSteps(selectedLabel);
          if(map.loaded() && map.isStyleLoaded()) {
            map.setPaintProperty('pref', 'fill-color', fillColor);
            map.on('mousemove', showPopup);
          }
        }
          
      }, [state, selectedLabel, munGEOJSON, munData]);

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
                geojson.features[index].properties["confirmados-" + munData[index].confirmados[confIndex].date] = Number(munData[index].confirmados[confIndex].count);
                geojson.features[index].properties["decesos-" + munData[index].decesos[confIndex].date] = Number(munData[index].decesos[confIndex].count);
                geojson.features[index].properties["pruebas-" + munData[index].pruebas[confIndex].date] = Number(munData[index].pruebas[confIndex].count);
            }
        }
        return geojson;
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
            property: label + "-" + state.date,
            stops: stepsList
        };
        
        thresholdsNum[label] = thresholdsNumLabel;
        setThresholdNum(thresholdsNum);

        return fillColor;
    }

    let showPopup = (e) => {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["pref"]
        });
        
        if(features.length > 0 && munData) {
            setSelectedMun(features[0].properties.NOM_MUN)
            popup
            .setLngLat(e.lngLat)
            .setHTML(
                ` 
                <div style='display: flex; flex-direction: column; align-items: center; padding: 10px'>
                    <span style='border-bottom: 1px solid; width: 100%; text-align: center; font-family: Raleway; font-weight:bold'>
                    ${features[0].properties.NOM_MUN}
                    </span>
                    <span style='display: flex;'>
                    <svg style='width: 15px; height: 15px; font-family: Raleway; font-weight:bold'>
                        <circle r="5" cx="6" cy="10" fill=${selectedLabel === 'confirmados' ? colors.BLUE : colors.RED} stroke-width="0" stroke="rgba(0, 0, 0, .5)"></circle>
                    </svg>
                    ${numberWithCommas(features[0].properties[ selectedLabel + "-" + "17/04/2020"])} ${selectedLabel} 
                    </span>
                </div>`
                )
            .setMaxWidth(400)
            .addTo(map);
        } else {
            popup.remove();
        }
      }
  return {
    callMunGEOJSON,
    mapRef,
    selectedMun
  }
}

export default useMapMunicipio;