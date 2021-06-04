import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import PieChart_Estados from './PieChart_Estados.js'
import HeatMap_Estados from './HeatMap_Estados.js';
/* Mapbox */
import * as d3 from 'd3';
import estadosRes from './data/mx_states.json'
import estados_geojson from "./data/mx_states.geojson";
import estados_csv from "./data/mx_states.csv";
import mapboxgl from 'mapbox-gl';
import { axisLeft } from 'd3';
import { HeatMap } from '@nivo/heatmap';


const Estatal = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;
    var prevSelectedState = null;
   

    /* Mapbox */
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const mapContainer = useRef(null);

    const [long, setLong] = useState(-101.68);
    const [lat, setLat] = useState(21.1236);
    const [zoom, setZoom] = useState(4);

    const [stateData, setStateData] = useState([])
    // const [selectedStateName, setSelectedStateName] = useState(data[0].name)
    const [selectedState, _setSelectedState] = useState(null)
    const [hoveredState, _setHoveredState] = useState(null);
    const hoveredStateRef = useRef(hoveredState);
    const selectedStateRef = useRef(selectedState);
    var mergedGeoJSON;

    var setHoveredState = data => {
      hoveredStateRef.current = data;
        _setHoveredState(data);
    };

    var setSelectedState = data => {
        selectedStateRef.current = data;
        _setSelectedState(data);
    }
    
    const [hoveredStateP, _setHoveredStateP] = useState(null);
    const hoveredStatePRef = useRef(hoveredStateP);
    const [selectedStateP, _setSelectedStateP] = useState(null);
    const selectedStatePRef = useRef(selectedStateP);

    var setHoveredStateP = data => {
      hoveredStatePRef.current = data;
        _setHoveredStateP(data);
    };

    var setSelectedStateP = data => {
        selectedStatePRef.current = data;
        _setSelectedStateP(data);
    }

    const [hoveredStateN, _setHoveredStateN] = useState(null);
    const hoveredStateNRef = useRef(hoveredStateN);
    const [selectedStateN, _setSelectedStateN] = useState(null);
    const selectedStateNRef = useRef(selectedStateN);

    var setHoveredStateN = data => {
        hoveredStateNRef.current = data;
        _setHoveredStateN(data);
    };

    var setSelectedStateN = data => {
        selectedStateNRef.current = data;
        _setSelectedStateN(data);
    }

    var loadFiles = [
        d3.json(estados_geojson),
        d3.csv(estados_csv)
    ];

    const setupGeoJson = () => {
        console.table(estados_geojson)
    }

    const setUpHeatMapData = () => {
        // PASAR INFORMACION DEL MERGEDGEOJSON A ARRAY
    }

    const setUpData = (id) => {
      let _stateData = []
      mergedGeoJSON.features.map(feature =>{
        if(feature.properties.CVE_ENT == id){
          _stateData.push({
            "id": "PAN",
            "label": "PAN",
            "value": feature.properties.PAN,
            "color": "hsl(210, 90%, 34%)"
          })
          _stateData.push({
            "id": "MC",
            "label": "MC",
            "value": feature.properties.MC,
            "color": "hsl(25, 87%, 57%)"
          })
          _stateData.push({
            "id": "MORENA",
            "label": "MORENA",
            "value": feature.properties.MORENA,
            "color": "hsl(8, 76%, 43%)"
          })
          _stateData.push({
            "id": "PES",
            "label": "PES",
            "value": feature.properties.PES,
            "color": "hsl(288, 45%, 34%)"
          })
          _stateData.push({
            "id": "PRD",
            "label": "PRD",
            "value": feature.properties.PRD,
            "color": "hsl(48, 100%, 50%)"
          })
          _stateData.push({
            "id": "PRI",
            "label": "PRI",
            "value": feature.properties.PRI,
            "color": "hsl(135, 37%, 48%)"
          })
          _stateData.push({
            "id": "PT",
            "label": "PT",
            "value": feature.properties.PT,
            "color": "hsl(3, 81%, 47%)"
          })
          _stateData.push({
            "id": "PVEM",
            "label": "PVEM",
            "value": feature.properties.PVEM,
            "color": "hsl(86, 50%, 58%)"
          })
          _stateData.push({
            "id": "RSP",
            "label": "RSP",
            "value": feature.properties.RSP,
            "color": "rgb(0,0,255)"
          })

        }
      })
      console.log(_stateData)
      setStateData(_stateData)
    }

    useEffect(() => {
        Promise.all(loadFiles).then(function (data) {
        setupGeoJson()
        let map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [long, lat],
            zoom: zoom,
            dragPan: false
        });
        data[0].features = data[0].features.map(feature => {
            data[1].forEach(prefData => {
                if (feature.properties.ESTADO === prefData['admin_name']) {
                    feature.properties.PAN = Number(prefData['PAN']);
                    feature.properties.PRI = Number(prefData['PRI']);
                    feature.properties.PRD = Number(prefData['PRD']);
                    feature.properties.PVEM = Number(prefData['PVEM']);
                    feature.properties.PT = Number(prefData['PT']);
                    feature.properties.MC = Number(prefData['MC']);
                    feature.properties.RSP = Number(prefData['RSP']);
                    feature.properties.MORENA = Number(prefData['MORENA']);
                    feature.properties.PES = Number(prefData['PES']);
                    feature.properties.FM = Number(prefData['FM']);
                    feature.properties.VT = Number(prefData['VT']);
                    feature.properties.VG = Number(prefData['VG']);
                    feature.properties.GP = String(prefData['GP']);
                }
            });
            return feature;
        });
        mergedGeoJSON = data[0];
        console.log(mergedGeoJSON);

        map.scrollZoom.disable();

        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
        map.on("load", function () {
            map.getCanvas().style.cursor = 'default';
            map.addSource('state-source', {
                'type': 'geojson',
                'data': mergedGeoJSON,

            });

            map.addLayer({
                'id': 'state-layer',
                'type': 'fill',
                'source': 'state-source',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'GP'],
                        'PAN',
                        '#0055BF',
                        'PRI',
                        '#FF0018',
                        'PRD',
                        '#FFCC00',
                        'PVEM',
                        '#A2CD40',
                        'PT',
                        '#FFED00',
                        'MC',
                        '#FF7A00',
                        'MORENA',
                        '#960016',
                        'PES',
                        '#7C2690',
                        'FM',
                        '#FF53A1',
                        'RSP',
                        '#313233',
                        'JHH',
                        '#B2242B',
                        'VXM',
                        '#0055BF',
                        /*'CAND_IND_01',
                        '#8FA7A9',
                        'CAND_IND_02',
                        '#8FA7A9',*/
                        'Sin Ganador',
                        '#CCCCCC',
                        '#CCCCCC',
                    ],
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        1,
                        0.80
                    ]
                }
            });

            map.addLayer({
                'id': 'state-borders',
                'type': 'line',
                'source': 'state-source',
                'layout': {},
                'paint': {
                'line-color': '#000',
                'line-width': 1,
                'line-opacity':0.5
                }
                });

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                });
        
            map.on('mousemove', 'state-layer', function (e) {
                if (e.features.length > 0) {
                    if (hoveredStateRef.current && hoveredStateRef.current > -1 && selectedStateRef.current != hoveredStateRef.current) {

                        map.setFeatureState(
                            { source: 'state-source', id: hoveredStateRef.current , name:hoveredStateNRef.current },
                            {party: hoveredStatePRef.current, hover: false }
                        );
                    }

                    //let _hoveredState = e.features[0].properties.ID;
                    let _hoveredState = e.features[0].id;
                    let _hoveredStateN = e.features[0].properties.ESTADO;
                    let _hoveredStateP = e.features[0].properties.GP;

                    var content = "<b>" + "Detalles del Estado" + "</b>" + "<br>";
                    content += "Estado: " + _hoveredStateN  + "<br>";
                    content += "Partido: " + _hoveredStateP + "<br>";
                    popup.setLngLat(e.lngLat).setHTML(content).addTo(map);
        


                    console.log(e.features)
                    map.setFeatureState(
                        { source: 'state-source', id: _hoveredState, name: _hoveredStateN},
                        { party: _hoveredStateP, hover: true }
                    );

                    setHoveredState(_hoveredState);
                    setHoveredStateN(_hoveredStateN);
                    setHoveredStateP(_hoveredStateP);
                }

            });

            // When the mouse leaves the state-fill layer, update the feature state of the
            // previously hovered feature.
            map.on('mouseleave', 'state-layer', function () {
                if (hoveredStateRef.current && selectedStateRef.current != hoveredStateRef.current) {
                    map.setFeatureState(
                        { source: 'state-source', id: hoveredStateRef.current, name: hoveredStateNRef.current },
                        { party: hoveredStatePRef.current, hover: false }
                    );
                }
                setHoveredState(null);
                setHoveredStateN(null);
                setHoveredStateP(null);
                popup.remove();
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng.toFixed(4));
                setLat(lat.toFixed(4));
                setZoom(map.getZoom().toFixed(2));
            });

            map.on('click', 'state-layer', function (e) {
                if (e.features.length > 0) {
                    if (selectedStateRef.current && selectedStateRef.current > -1) {
                        map.setFeatureState(
                            { source: 'state-source', id: selectedStateRef.current , name:selectedStateNRef.current },
                            {party: selectedStatePRef.current, hover: false }
                        );
                        prevSelectedState = selectedStateRef.current;
                    }

                    let _selectedState = e.features[0].id;
                    let _selectedStateN = e.features[0].properties.ESTADO;
                    let _selectedStateP = e.features[0].properties.GP;
        
                    var content = "<b>" + "Detalles del Estado" + "</b>" + "<br>";
                    content += "Estado: " + _selectedStateN  + "<br>";
                    content += "Partido: " + _selectedStateP + "<br>";
                    popup.setLngLat(e.lngLat).setHTML(content).addTo(map);
        
                    console.log(e.features[0].properties.ESTADO);
        
                    console.log(e.features)
                    map.setFeatureState(
                        { source: 'state-source', id: _selectedState, name: _selectedStateN},
                        { party: _selectedStateP, hover: true }
                    );
                    
                    setUpData(_selectedState);
                    setSelectedState(_selectedState);
                    setSelectedStateN(_selectedStateN);
                    setSelectedStateP(_selectedStateP);
                    
                }

            });

        });
    });

    }, []);

    return (
        <div className="state-map-wrapper">

            <div className="info">
                Estado: <strong>{hoveredStateRef ? hoveredState : ""}</strong>
            </div>
            <div className="info">
                Partido Dominante: <strong>{hoveredStatePRef ? hoveredStateP : ""}</strong>
            </div>
            <div id="hoveredDetailMap" className={classes.map}>
                <div style={{ height: "100%" }} ref={mapContainer}></div>
            </div>
            <div >
               {/* <h2><strong>Distribución de Votos</strong></h2> */}
               {stateData.length != 0 && (
                 <div className = {classes.pieContainer}>
                   <PieChart_Estados data = {stateData}/>
                   </div>
               )}
              </div>
            <div >
               {/* <h2><strong>Distribución de Votos</strong></h2> */}
                 <div className = {classes.chartContainer}>
                   <HeatMap_Estados data = {estadosRes}/>
                   </div>
              </div>
              <div className = {classes.clearfix}></div>
       
        </div>
    );
}

const styles = () => ({
  /* Desktop */
  map: {
    height: '800px',
    width: '800px',
    margin: 'auto',
    float: 'left'
  },

  chartContainer: {
    height: '950px',
    width: '950px',
    margin: 'auto',
    paddingTop: '150px',
    float: 'right'
  },

  pieContainer: {
    height: '600px',
    width: '600px',
    margin: 'auto',
    paddingTop: '150px',
    float: 'right'
  },

  clearfix: {
    clear: 'both'
  },

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    
  }
  
});

export default withStyles(styles)(Estatal);