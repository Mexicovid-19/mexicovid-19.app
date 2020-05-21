import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';
import { MapMunicipioContext } from '../contexts/MapMunicipioContext';
import * as colors from './../constants/colors';
import { numberWithCommas } from '../Utils/numberWCommas';

const useMap = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
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
  const[ popup , setPopup] = React.useState(new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, closeButton: false,className: 'popup-map' }));
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
    setMap(
      new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko',
      center: [-97.8116, 24.6040],
      zoom : 4.2
    }));

    if (isMobile){
      setMap(
        new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko',
        center: [-100.8116, 24.6040],
        zoom : 3.2
      }));
    };
  }, []);


  React.useEffect(() => {
    if(map && !map.loaded()) {
      map.on('load', function() {
        callStatesGEOJSON();
      })
    }
  }, [map]);

  React.useEffect(() => {
    if(stateData && statesGeOJSON) {  
      let fillColor = getSteps(selectedLabel);
      let geojson = setUpGEOJson();

      
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
          'fill-outline-color': '#FFF'
        }
      });

      map.on('mousemove', showPopup);
      map.on('click', 'pref', openMapContainer);
      
      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'bottom-right');

      setMap(map)
    }
  }, [statesGeOJSON, stateData]);

  React.useEffect(() => {
    if(map && state.date) {
      let fillColor = getSteps(selectedLabel);
      if(map.loaded() && map.isStyleLoaded()) {
        map.off('mousemove', 'pref', showPopup);
        map.setPaintProperty('pref', 'fill-color', fillColor);
        map.on('mousemove', showPopup);
        map.off('click', 'pref', openMapContainer);
        map.on('click', 'pref', openMapContainer);
        setMap(map)
      }
    }
      
  }, [state, selectedLabel, statesGeOJSON]);

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

  let showPopup = (e) => {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["pref"]
    });
    
    if(features.length > 0 && stateData) {
      popup
      .setLngLat(e.lngLat)
      .setHTML(
        ` 
          <div style='display: flex; flex-direction: column; align-items: center; padding: 10px'>
            <span style='border-bottom: 1px solid; width: 100%; text-align: center; font-family: Raleway; font-weight:bold'>
              ${features[0].properties.ESTADO}
            </span>
            <span style='display: flex;'>
              <svg style='width: 15px; height: 15px; font-family: Raleway; font-weight:bold'>
                <circle r="5" cx="6" cy="10" fill=${selectedLabel === 'confirmados' ? colors.BLUE : colors.RED} stroke-width="0" stroke="rgba(0, 0, 0, .5)"></circle>
              </svg>
              ${numberWithCommas(features[0].properties[ selectedLabel + "#" + state.date])} ${selectedLabel} 
              <button onClick="${(e) => openMapContainer(e)}">Ver mas</button>
            </span>
          </div>`
        )
      .setMaxWidth(400)
      .addTo(map);
    } else {
        //popup.remove();
    }
  }

  let binarySearch = (inf, sup, val, arr) => {
    if ( inf > sup)
      return sup;
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
    let geojson = statesGeOJSON;
    let geojsonOrdered = [];
    let dataCveEnt = stateData.map(el => Number(el.cve_ent))

    for( var cveEntIndex in dataCveEnt) {
      let index = binarySearch(0, geojson.features.length, dataCveEnt[cveEntIndex], geojson.features)
      for(var j in state.dates) {
        geojson.features[index].properties["confirmados#" + state.dates[j]] = Number(stateData[cveEntIndex].confirmados[j].count);
        geojson.features[index].properties["decesos#" + state.dates[j]] = Number(stateData[cveEntIndex].decesos[j].count);
      }
      geojsonOrdered.push(geojson.features[index])
      geojson.features.splice(index,1)
    }
    
    geojson.features = geojsonOrdered
    return geojson;
  }

  let openMapContainer = (e) => {
    console.log("OPNE")
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["pref"]
    });
    
    if(features.length > 0) {
      let cve_ent = String(features[0].properties.CVE_ENT);
      let nombre = features[0].properties.ESTADO;
      cve_ent = cve_ent.length == 1 ? "0" + cve_ent : cve_ent;
      setStateSelected(
        {
          cve_ent,
          nombre: nombre.slice(0,1) + nombre.slice(1).toLowerCase(),
          abrev: features[0].properties.ABREV
        }
      );
    }
    
    setIsMapMunicipio(true);
    map.off('click', 'pref', openMapContainer);
    map.on('click', 'pref', openMapContainer);
  }

  let closeMapContainer = (e) => {
    setIsMapMunicipio(false);
  }

  return {
    mapRef,
    map,
    showPopup,
    popup,
    thresholdsNum,
    stateSelected,

    openMapContainer,
    closeMapContainer,
    isMapMunicipio
  }
}

export default useMap;