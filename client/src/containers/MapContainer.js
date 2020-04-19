import React from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';

const useMap = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;
  
  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  const [statesGeOJSON, setStatesGeOJSON] = React.useState(null);
  const thresholdColor = {
    "confirm": ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d'],
    "suspicious": ['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#8c2d04']
  };
  const[ popup , setPopup] = React.useState(new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, closeButton: false,className: 'popup-map' }));


  const {statesConfirm,
         statesSuspicious, 
         state } = React.useContext(AppContext);

  const [stateMap, setState] = React.useState({
    lng: -105.330835,
    lat: 25.19238733,
    zoom: 4.5
  });
  
  React.useEffect(() => {
    setMap(
      new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko',
      center: [stateMap.lng, stateMap.lat],
      zoom : stateMap.zoom
    }));
  }, []);

  React.useEffect(() => {
    if(map) {
      map.on('move', () => {
        const { lng, lat } = map.getCenter();
    
        setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });

      callStatesGEOJSON();
    }
  }, [map]);

  React.useEffect(() => {
    if(statesConfirm && statesSuspicious && statesGeOJSON) {  
      /*let confirm = statesConfirm.map(stateMex => {
        return stateMex.confirmados[state.date]; 
      });
      
      confirm.sort((a,b) => a - b);
      let thresholdsNum = [confirm[0], confirm[4], confirm[8], confirm[12], confirm[16], confirm[20],confirm[24],confirm[28]];
      
      let stepsList = thresholdsNum.map((num, i) => {
          return [Number(num), thresholdColor["confirm"][i]];
      });*/
      
      let fillColor = getSteps();
     
      map.on('load', function() {
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
      });
    }
  }, [statesGeOJSON, statesConfirm, statesSuspicious]);

  React.useEffect(() => {
    if(map && state.date) {
      let fillColor = getSteps();
      if(map.loaded() && map.isStyleLoaded()) {
        map.setPaintProperty('pref', 'fill-color', fillColor);
        map.on("mousemove", (e) => {
          showPopup(e);
        });
      }     
    }
      
  }, [state]);

  let callStatesGEOJSON = ()  => {
    axios.post(`${process.env.REACT_APP_API_URL}/map/states`, {})
    .then(res => {
      setStatesGeOJSON(res.data);
    });
  }

  let getSteps = () => {
    let confirm = statesConfirm.map(stateMex => {
      return stateMex.confirmados[state.date]; 
    });
    
    confirm.sort((a,b) => a - b);
    let thresholdsNum = [confirm[0], confirm[4], confirm[8], confirm[12], confirm[16], confirm[20],confirm[24],confirm[31]];
    console.log(thresholdsNum);
    let stepsList = thresholdsNum.map((num, i) => {
        return [Number(num), thresholdColor["confirm"][i]];
    });
    
    let fillColor = {
      property: "confirmados-" + state.date,
      stops: stepsList
    };

    return fillColor;
  }

  let showPopup = (e) => {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["pref"]
    });
    
    if(features.length > 0 && statesConfirm && statesSuspicious) {
      popup
      .setLngLat(e.lngLat)
      .setHTML(
        ` <label>Estado:</label>
          <span>${features[0].properties.ESTADO}</span>
          <br>
          <label>Confirmados:</label>
          <span>${features[0].properties["confirmados-" + state.date]}</span>
          <br>
          <label>Sospechosos:</label>
          <span>${features[0].properties["sospechosos-" + state.date]}</span>
        `
        )
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
        for(var j in statesSuspicious[i].sospechosos) {
          geojson.features[i].properties["sospechosos-" + j] = Number(statesSuspicious[i].sospechosos[j]);
        }
      }
    
    return geojson;
  }

  return {
    mapRef,
    stateMap,
    map,
    showPopup,
    popup
  }
}

export default useMap;