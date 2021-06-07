//NuevoLeonAyun.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';
import municipios_nl from "./data/municipios_nl.geojson";
import municipios_csv from "./data/AyunNuevoLeon.csv";
import mapboxgl from 'mapbox-gl';
import NuevoLeonChart from './NuevoLeonChart';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

const NuevoLeon = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;
  //NUEVO
  var prevSelectedMun = null;

  /* Mapbox */
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  const [long, setLong] = useState(-100.3152586);
  const [lat, setLat] = useState(25.6802019);
  const [zoom, setZoom] = useState(6.5);

  const [districtData, setDistrictData] = useState([])
  const [gobData, setGobData] = useState([])
  //const [selectedDistrictName, setSelectedDistrictName] = useState(data[0].name)
  //const [selectedDistrict, setSelectedDistrict] = useState(0)
  const [selectedDistrict, setSelectedDistrict] = useState(40)
  const [hoveredDistrict, _setHoveredDistrict] = useState(null);
  const hoveredDistrictRef = useRef(hoveredDistrict);
  const selectedDistrictRef = useRef(selectedDistrict);
  var mergedGeoJSON;

  const setHoveredDistrict = data => {
      hoveredDistrictRef.current = data;
      _setHoveredDistrict(data);
  };

  const [hoveredMunP, _setHoveredMunP] = useState(null);
  const hoveredMunPRef = useRef(hoveredMunP);
  const [selectedDistrictP, _setSelectedDistrictP] = useState(null);
  const selectedDistrictPRef = useRef(selectedDistrictP);

  var setHoveredMunP = data => {
    hoveredMunPRef.current = data;
      _setHoveredMunP(data);
  };

  var setSelectedDistrictP = data => {
    selectedDistrictPRef.current = data;
      _setSelectedDistrictP(data);
  };

  const [hoveredMunN, _setHoveredMunN] = useState(null);
  const hoveredMunNRef = useRef(hoveredMunN);
  const [selectedDistrictN, _setSelectedDistrictN] = useState(null);
  const selectedDistrictNRef = useRef(selectedDistrictN);

  var setHoveredMunN = data => {
    hoveredMunNRef.current = data;
      _setHoveredMunN(data);
  };

  var setSelectedDistrictN = data => {
    selectedDistrictNRef.current = data;
      _setSelectedDistrictN(data);
  };

  var loadFiles = [
    d3.json(municipios_nl),
    d3.csv(municipios_csv)
  ];

  const setupGeoJson = () => {
    console.table(municipios_nl)
  }

//DATOS PIECHART AYUN
const setUpData = (id) => {
  let _districtData = []
  mergedGeoJSON.features.map(feature =>{
    if(feature.properties.municipio == id){
      if(feature.properties.PAN > 0){
          _districtData.push({
              "id": "PAN",
              "label": "PAN",
              "value": feature.properties.PAN,
              "color": "hsl(210, 90%, 34%)",
              "width": 60,
          })
      }
      if(feature.properties.MORENA > 0){
          _districtData.push({
              "id": "MORENA",
              "label": "MORENA",
              "value": feature.properties.MORENA,
              "color": "hsl(8, 76%, 43%)",
              "width": 60,
          })
      }
      if(feature.properties.PT > 0){
          _districtData.push({
              "id": "PT",
              "label": "PT",
              "value": feature.properties.PT,
              "color": "#FFED00",
              "width": 60,
          })
      }
      if(feature.properties.PES > 0){
          _districtData.push({
              "id": "PES",
              "label": "PES",
              "value": feature.properties.PES,
              "color": "hsl(288, 45%, 34%)",
              "width": 60,
          })
      }
      if(feature.properties.PRD > 0){
          _districtData.push({
              "id": "PRD",
              "label": "PRD",
              "value": feature.properties.PRD,
              "color": "hsl(48, 100%, 50%)",
              "width": 60,
          })
      }
      if(feature.properties.PRI > 0){
          _districtData.push({
              "id": "PRI",
              "label": "PRI",
              "value": feature.properties.PRI,
              "color": "hsl(135, 37%, 48%)",
              "width": 60,
          })
      }
      if(feature.properties.PVEM > 0){
          _districtData.push({
              "id": "PVEM",
              "label": "PVEM",
              "value": feature.properties.PVEM,
              "color": "hsl(86, 50%, 58%)",
              "width": 60,
          })
      }
      if(feature.properties.RSP > 0){
          _districtData.push({
              "id": "RSP",
              "label": "RSP",
              "value": feature.properties.RSP,
              "color": "rgb(0,0,255)",
              "width": 60,
          })
      }
      if(feature.properties.JHHNL > 0){
          _districtData.push({
          "id": "JHHNL",
          "label": "JHHNL",
          "value": feature.properties.JHHNL,
          "color": "hsl(8, 76%, 43%)"
        })
      }
      if(feature.properties.NANL > 0){
          _districtData.push({
            "id": "NANL",
            "label": "NANL",
            "value": feature.properties.NANL,
            "color": "hsl(181, 80%, 40%)"
          })
      }
      if(feature.properties.VFNL > 0){
          _districtData.push({
            "id": "VFNL",
            "label": "VFNL",
            "value": feature.properties.VFNL,
            "color": "hsl(135, 37%, 48%)"
          })
      }
      if(feature.properties.CI_1 > 0){
          _districtData.push({
            "id": "CI_1",
            "label": "CI_1",
            "value": feature.properties.CI_1,
            "color": '#8A9393'
          })
      }
      if(feature.properties.CI_2 > 0){
          _districtData.push({
            "id": "CI_2",
            "label": "CI_2",
            "value": feature.properties.CI_2,
            "color": '#8FA7A9'
          })
      }
    }
  })
  console.log(_districtData)
  setDistrictData(_districtData)
}
//DATOS PIECHART GOB
const setUpDatos = (id) => {
  let _gobData = []
  mergedGeoJSON.features.map(feature =>{
    if(feature.properties.municipio == id){
        if(feature.properties.PAN > 0){
          _gobData.push({
              "id": "PAN",
              "label": "PAN",
              "value": feature.properties.PAN,
              "color": "hsl(210, 90%, 34%)",
              "width": 60,
          })
      }
      if(feature.properties.MORENA > 0){
          _gobData.push({
              "id": "MORENA",
              "label": "MORENA",
              "value": feature.properties.MORENA,
              "color": "hsl(8, 76%, 43%)",
              "width": 60,
          })
      }
      if(feature.properties.PT > 0){
          _gobData.push({
              "id": "PT",
              "label": "PT",
              "value": feature.properties.PT,
              "color": "#FFED00",
              "width": 60,
          })
      }
      if(feature.properties.PES > 0){
          _gobData.push({
              "id": "PES",
              "label": "PES",
              "value": feature.properties.PES,
              "color": "hsl(288, 45%, 34%)",
              "width": 60,
          })
      }
      if(feature.properties.PRD > 0){
          _gobData.push({
              "id": "PRD",
              "label": "PRD",
              "value": feature.properties.PRD,
              "color": "hsl(48, 100%, 50%)",
              "width": 60,
          })
      }
      if(feature.properties.PRI > 0){
          _gobData.push({
              "id": "PRI",
              "label": "PRI",
              "value": feature.properties.PRI,
              "color": "hsl(135, 37%, 48%)",
              "width": 60,
          })
      }
      if(feature.properties.PVEM > 0){
          _gobData.push({
              "id": "PVEM",
              "label": "PVEM",
              "value": feature.properties.PVEM,
              "color": "hsl(86, 50%, 58%)",
              "width": 60,
          })
      }
      if(feature.properties.RSP > 0){
          _gobData.push({
              "id": "RSP",
              "label": "RSP",
              "value": feature.properties.RSP,
              "color": "rgb(0,0,255)",
              "width": 60,
          })
      }
      if(feature.properties.JHHNL > 0){
          _gobData.push({
          "id": "JHHNL",
          "label": "JHHNL",
          "value": feature.properties.JHHNL,
          "color": "hsl(8, 76%, 43%)"
        })
      }
      if(feature.properties.NANL > 0){
          _gobData.push({
            "id": "NANL",
            "label": "NANL",
            "value": feature.properties.NANL,
            "color": "hsl(181, 80%, 40%)"
          })
      }
      if(feature.properties.VFNL > 0){
          _gobData.push({
            "id": "VFNL",
            "label": "VFNL",
            "value": feature.properties.VFNL,
            "color": "hsl(135, 37%, 48%)"
          })
      }
    }
  })
  console.log(_gobData)
  setGobData(_gobData)
}

  useEffect(() => {
    //CAMBIOS
    Promise.all(loadFiles).then(function (data) {
    setupGeoJson()
    //COMENTAR ESTO SI QUIERO QUE LA GRAFICA APAREZCA HASTA QUE SE DE CLICK EN EL MAPA
    //setUpData(selectedDistrict)
    //setUpDatos(selectedDistrict)

    let map = new mapboxgl.Map({
        container: mapContainer.current,
        //ESTILO NEGRO
        //style: "mapbox://styles/mapbox/dark-v10",
        style: "mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko",
        //ESTILO BLANCO
        //style: "mapbox://styles/mapbox/light-v10",
        center: [long, lat],
        zoom: zoom,
        dragPan: false
    });

    data[0].features = data[0].features.map(feature => {
      data[1].forEach(prefData => {
          if (feature.properties.nombre === prefData['nombre']) {
              feature.properties.PAN = Number(prefData['PAN']);
              feature.properties.PRI = Number(prefData['PRI']);
              feature.properties.PRD = Number(prefData['PRD']);
              feature.properties.PVEM = Number(prefData['PVEM']);
              feature.properties.PT = Number(prefData['PT']);
              feature.properties.CI_1 = Number(prefData['CI_1']);
              feature.properties.CI_2 = Number(prefData['CI_2']);
              feature.properties.MC = Number(prefData['MC']);
              feature.properties.RSP = Number(prefData['RSP']);
              feature.properties.MORENA = Number(prefData['MORENA']);
              feature.properties.PES = Number(prefData['PES']);
              feature.properties.FXM = Number(prefData['FXM']);
              feature.properties.JHHNL = Number(prefData['JHHNL']);
              feature.properties.VFNL = Number(prefData['VFNL']);
              feature.properties.NANL = Number(prefData['NANL']);
              feature.properties.GANADOR = String(prefData['Ganador']);
          }
      });
      return feature;
  });
mergedGeoJSON = data[0];

setUpData(selectedDistrict)

//map.scrollZoom.disable();

console.log(mergedGeoJSON);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.once("load", function () {

        map.addSource('district-source', {
            'type': 'geojson',
            'data': mergedGeoJSON
        });
  
        map.addLayer({
          'id': 'district-layer',
          'type': 'fill',
          'source': 'district-source',
          'layout': {},
          'paint': {
              'fill-color': [
                  'match',
                  ['get', 'GANADOR'],
                  'PAN',
                  '#0957a5',
                  'PRI',
                  '#4da864',
                  'PRD',
                  '#FFCC00',
                  'PVEM',
                  '#9bc95e',
                  'PT',
                  '#d92017',
                  'MC',
                  '#f18132',
                  'MORENA',
                  '#c1311a',
                  'PES',
                  '#6e307e',
                  'FXM',
                  '#eb609f',
                  'RSP',
                  '#303131',
                  'JHHNL',
                  '#c1311a',
                  'CI_1',
                  '#8A9393',
                  'CI_2',
                  '#8FA7A9',
                  'NANL',
                  '#14b5b8',
                  'VFNL',
                  '#4da864',
                  '#CCCCCC',
              ],
              //'fill-outline-color': '#FFF',
              'fill-opacity': [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  //0.8,
                  //0.5
                  1,
                  0.80
              ]
          }
      });

      map.addLayer({
        'id': 'district-borders',
        'type': 'line',
        'source': 'district-source',
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
            className: 'myPopup'
        });

        map.on('mousemove', 'district-layer', function (e) {
            map.getCanvas().style.cursor = 'pointer';
            if (e.features.length > 0) {
                if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1 && selectedDistrictRef.current != hoveredDistrictRef.current) {

                    map.setFeatureState(
                        { source: 'district-source', id: hoveredDistrictRef.current, name:hoveredMunNRef.current },
                        { party: hoveredMunPRef.current, hover: false }
                    );
                }
                
                let _hoveredDistrict = e.features[0].id;
                let _hoveredMunN = e.features[0].properties.nombre;
                let _hoveredMunP = e.features[0].properties.GANADOR;

                var content = "<b>" + "Detalles del Municipio" + "</b>" + "<br>";
                content += "Municipio: " + _hoveredMunN  + "<br>";
                content += "Partido: " + _hoveredMunP + "<br>";
                popup.setLngLat(e.lngLat).setHTML(content).addTo(map);
                
    
                console.log(e.features)
                map.setFeatureState(
                    { source: 'district-source', id: _hoveredDistrict,name: _hoveredMunN },
                    { party: _hoveredMunP, hover: true }
                );

                setHoveredDistrict(_hoveredDistrict);
                setHoveredMunN(_hoveredMunN);
                setHoveredMunP(_hoveredMunP);
            }

        });

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.

        map.on('mouseleave', 'district-layer', function () {
          if (hoveredDistrictRef.current && selectedDistrictRef.current != hoveredDistrictRef.current) {
              map.setFeatureState(
                  { source: 'district-source', id: hoveredDistrictRef.current, name: hoveredMunNRef.current },
                  { party: hoveredMunPRef.current,hover: false }
              );
          }
          setHoveredDistrict(null);
          setHoveredMunN(null);
          setHoveredMunP(null);
          popup.remove();
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            setLong(lng.toFixed(4));
            setLat(lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

      map.on('click', 'district-layer', function (e) {
        if (e.features.length > 0) {
            if (selectedDistrictRef.current && selectedDistrictRef.current > -1) {
                map.setFeatureState(
                    { source: 'district-source', id: selectedDistrictRef.current , name:selectedDistrictNRef.current },
                    {party: selectedDistrictPRef.current, hover: false }
                );
                prevSelectedMun = selectedDistrictRef.current;
            }

            let _selectedDistrict = e.features[0].properties.municipio;
            let _selectedDistrictN = e.features[0].properties.nombre;
            let _selectedDistrictP = e.features[0].properties.GANADOR;

            var content = "<b>" + "Detalles del Municipio" + "</b>" + "<br>";
            content += "Municipio: " + _selectedDistrictN  + "<br>";
            content += "Partido: " + _selectedDistrictP + "<br>";
            popup.setLngLat(e.lngLat).setHTML(content).addTo(map);

            console.log(e.features[0].properties.nombre);

            console.log(e.features)
            map.setFeatureState(
                { source: 'district-source', id: _selectedDistrict, name: _selectedDistrictN},
                { party: _selectedDistrictP, hover: true }
            );
            
            setUpData(_selectedDistrict);
            setUpDatos(_selectedDistrict);
            setSelectedDistrict(_selectedDistrict);
            setSelectedDistrictN(_selectedDistrictN);
            setSelectedDistrictP(_selectedDistrictP);
        }

    });

    });
  });

}, []);

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div>
        <div className={classes.itemsContainer}>
            <div className="district-map-wrapper">
                    <div id="districtDetailMap" className={classes.map}>
                        <div style={{ height: "100%" }} ref={mapContainer}></div>
                    </div>
                </div>
            <div>
              <h2 className={classes.districtName}> Presidente Municipal</h2>
              <h2 className={classes.munName} >{hoveredMunNRef ? hoveredMunN : ""}</h2>
                    {districtData.length !== 0 && (
                        <div className={classes.chartContainer}>
                            <NuevoLeonChart data={districtData}/>
                        </div>
                    )}
                </div>
            </div>
        </div>    
  );
  
}


const styles = () => ({
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 1600,
    margin: 'auto',
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  map: {
    height: '800px',
    width: '40vw',
    margin: 'auto',
  },
  chartContainer: {
    height: '600px',
    width: '40vw',
    margin: 'auto',
    paddingTop: '150px'
  },
  chartContainer2: {
    height: '600px',
    width: '600px',
    margin: 'auto',
    paddingTop: '150px'
  },
  districtName: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: colors.WHITE
  },
  munName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '50px',
    margin: 'auto',
    color: colors.WHITE
},
  titleGob: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: '50px',
    color: colors.WHITE
  },
  titleNL: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: '50px',
    color: colors.WHITE
  },
  tabla: {
    //textAlign: 'center',
    //fontSize: 40,
    //fontWeight: 'bold',
    //paddingTop: '50px'
  },
  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    itemsContainer: {
        display: 'block',
        margin: 'auto',
    },
    map: {
        height: '500px',
        width: '100vw',
    },
    chartContainer: {
        height: '500px',
        width: '100vw',
        flex: 1,
        margin: 'auto',
        padding: '50px',
    },
  }
  
});

export default withStyles(styles)(NuevoLeon);