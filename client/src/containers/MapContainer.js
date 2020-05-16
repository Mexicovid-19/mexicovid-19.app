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
  const [munGeOJSON, setMunGeOJSON] = React.useState(null);
  const thresholdColor = {
    "decesos": ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d'],
    "confirmados": ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#084594'],
    "muertes": ['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
  };
  const [thresholdsNum, setThresholdNum] = React.useState({
    "confirmados": [],
    "decesos": [],
  })
  const isMobile = window.innerWidth < 1000;
  const[ popup , setPopup] = React.useState(new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, closeButton: false,className: 'popup-map' }));
  const [isMapMunicipio, setIsMapMunicipio] = React.useState(false);
  const [stateSelected, setStateSelected] = React.useState("");
  const {statesConfirm,
         statesDeads,
         selectedLabel, 
         state,
        isMap,
        callMunData
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
    if(map) {
      map.on('load', function() {
        callStatesGEOJSON();
      })
    }
  }, [map]);

  React.useEffect(() => {
    if(statesConfirm && statesDeads && statesGeOJSON) {  
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
    }
  }, [statesGeOJSON, statesConfirm, statesDeads]);

  React.useEffect(() => {
    if(map && state.date) {
      let fillColor = getSteps(selectedLabel);
      if(map.loaded() && map.isStyleLoaded()) {
        map.setPaintProperty('pref', 'fill-color', fillColor);
        map.on('mousemove', showPopup);
        map.on('click', 'pref', openMapContainer);
      }
    }
      
  }, [state, selectedLabel, statesGeOJSON, statesConfirm, statesDeads]);

  React.useEffect(() => {
    if(map && map.loaded() && map.isStyleLoaded()) {
      map.resize();
    }
  }, [isMap]);

  React.useEffect(() => {
    if(stateSelected !== "") {
      callMunData(stateSelected);
    }
  }, [stateSelected])

  let callStatesGEOJSON = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/states`, {})
    .then(res => {
      setStatesGeOJSON(res.data);
    });
  }

  let getSteps = (label) => {
    let statesData = statesConfirm;

    if(label === "decesos") {
      statesData = statesDeads;
    }

    let data = statesData.map(stateMex => {
      return stateMex[label][state.date]; 
    });
    
    data.sort((a,b) => a - b);
    let thresholdsNumLabel = [data[0], data[4], data[8], data[12], data[16], data[20],data[24],data[31]];
    
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
    
    if(features.length > 0 && statesConfirm && statesDeads) {
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
              ${numberWithCommas(features[0].properties[ selectedLabel + "-" + state.date])} ${selectedLabel} 
            </span>
          </div>`
        )
      .setMaxWidth(400)
      .addTo(map);
    } else {
        popup.remove();
    }
  }

  let setUpGEOJson = () => {
    let geojson = statesGeOJSON;
      geojson.features = geojson.features.sort((a,b) => a.properties.CVE_ENT - b.properties.CVE_ENT);
      
      for(var i = 0; i < 32; i++) {
        for(var j in statesConfirm[i].confirmados) {
          geojson.features[i].properties["confirmados-" + j] = Number(statesConfirm[i].confirmados[j]);
        }
        for(var j in statesDeads[i].decesos) {
          geojson.features[i].properties["decesos-" + j] = Number(statesDeads[i].decesos[j]);
        }
      }
    console.log(geojson);
    return geojson;
  }

  let openMapContainer = (e) => {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["pref"]
    });
    
    if(features.length > 0) {
      let cve_ent = String(features[0].properties.CVE_ENT);
      cve_ent = cve_ent.length == 1 ? "0" + cve_ent : cve_ent;
      setStateSelected(cve_ent);
    }
    
    setIsMapMunicipio(true);
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