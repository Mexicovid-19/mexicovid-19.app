//NuevoLeonSeccion2.js

import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles';
import seccionesNL from "./data/seccionesNL.geojson";
import seccionesNL_csv from "./data/SeccionesNLGob.csv";
import mapboxgl from 'mapbox-gl';
import * as d3 from 'd3';
import "./Popup.css"
import * as colors from '../../constants/colors';

const NuevoLeon = ({ classes }) => {
  const isMobile = window.innerWidth < 1000;
  //NUEVO
  var prevSelectedMun = null;

  /* Mapbox */
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;
  //mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  //NUEVO LEON
  //const [long, setLong] = useState(-99.85);
  //const [lat, setLat] = useState(25.498);
  //SECCIONES
  const [long, setLong] = useState(-100.3152586);
  const [lat, setLat] = useState(25.67);
  const [zoom, setZoom] = useState(12);//o 13

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
  const [selectedDistrictN, _setSelectedDistrictN] = useState('MONTERREY');
  const selectedDistrictNRef = useRef(selectedDistrictN);

  var setHoveredMunN = data => {
    hoveredMunNRef.current = data;
      _setHoveredMunN(data);
  };

  var setSelectedDistrictN = data => {
    selectedDistrictNRef.current = data;
      _setSelectedDistrictN(data);
  };

  //SECCION
  const [hoveredMunS, _setHoveredMunS] = useState(null);
  const hoveredMunSRef = useRef(hoveredMunS);
  const [selectedDistrictS, _setSelectedDistrictS] = useState(null);
  const selectedDistrictSRef = useRef(selectedDistrictS);

  var setHoveredMunS = data => {
    hoveredMunSRef.current = data;
      _setHoveredMunS(data);
  };

  var setSelectedDistrictS = data => {
    selectedDistrictSRef.current = data;
      _setSelectedDistrictS(data);
  };

  //PARTICIPACION
  const [hoveredMunPar, _setHoveredMunPar] = useState(null);
  const hoveredMunParRef = useRef(hoveredMunPar);
  const [selectedDistrictPar, _setSelectedDistrictPar] = useState(null);
  const selectedDistrictParRef = useRef(selectedDistrictPar);

  var setHoveredMunPar = data => {
    hoveredMunParRef.current = data;
      _setHoveredMunPar(data);
  };

  var setSelectedDistrictPar = data => {
    selectedDistrictParRef.current = data;
      _setSelectedDistrictPar(data);
  };




  var loadFiles = [
    d3.json(seccionesNL),
    d3.csv(seccionesNL_csv)
  ];

  const setupGeoJson = () => {
    console.table(seccionesNL)
  }

//DATOS PIECHART AYUN
const setUpData = (id) => {
  let _districtData = []
  mergedGeoJSON.features.map(feature =>{
    if(feature.properties.municipio == id){
      if(feature.properties.MORENA > 0){
        _districtData.push({
          "id": "MORENA",
          "label": "MORENA",
          "value": feature.properties.MORENA,
          "color": "hsl(8, 76%, 43%)"
        })
      }
      if(feature.properties.PAN > 0){
        _districtData.push({
          "id": "PAN",
          "label": "PAN",
          "value": feature.properties.PAN,
          "color": "hsl(210, 90%, 34%)"
        })
      }
      if(feature.properties.PRI > 0){
        _districtData.push({
          "id": "PRI",
          "label": "PRI",
          "value": feature.properties.PRI,
          "color": "hsl(135, 37%, 48%)"
        })
      }
      if(feature.properties.PRD > 0){ 
        _districtData.push({
          "id": "PRD",
          "label": "PRD",
          "value": feature.properties.PRD,
          "color": "hsl(48, 100%, 50%)"
        })
      }
      if(feature.properties.PT > 0){
        _districtData.push({
          "id": "PT",
          "label": "PT",
          "value": feature.properties.PT,
          "color": "hsl(3, 81%, 47%)"
        })
      }
      if(feature.properties.MC > 0){ 
        _districtData.push({
          "id": "MC",
          "label": "MC",
          "value": feature.properties.MC,
          "color": "hsl(25, 87%, 57%)"
        })
      }
      if(feature.properties.PES > 0){
        _districtData.push({
          "id": "PES",
          "label": "PES",
          "value": feature.properties.PES,
          "color": "hsl(288, 45%, 34%)"
        })
      }
      if(feature.properties.RSP > 0){
        _districtData.push({
          "id": "RSP",
          "label": "RSP",
          "value": feature.properties.RSP,
          "color": "hsl(180, 1%, 19%)"
        })
      }
      if(feature.properties.FXM > 0){
        _districtData.push({
          "id": "FXM",
          "label": "FXM",
          "value": feature.properties.FXM,
          "color": "hsl(333, 78%, 65%)"
        })
      }
      if(feature.properties.PVEM > 0){ 
        _districtData.push({
          "id": "PVEM",
          "label": "PVEM",
          "value": feature.properties.PVEM,
          "color": "hsl(86, 50%, 58%)"
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
      _gobData.push({
        "id": "MORENA",
        "label": "MORENA",
        "value": feature.properties.MORENA,
        "color": "hsl(8, 76%, 43%)"
      })
      _gobData.push({
        "id": "PAN",
        "label": "PAN",
        "value": feature.properties.PAN,
        "color": "hsl(210, 90%, 34%)"
      })
      _gobData.push({
        "id": "PRI",
        "label": "PRI",
        "value": feature.properties.PRI,
        "color": "hsl(135, 37%, 48%)"
      })
      _gobData.push({
        "id": "PRD",
        "label": "PRD",
        "value": feature.properties.PRD,
        "color": "hsl(48, 100%, 50%)"
      })
      _gobData.push({
        "id": "PT",
        "label": "PT",
        "value": feature.properties.PT,
        "color": "hsl(3, 81%, 47%)"
      })
      _gobData.push({
        "id": "MC",
        "label": "MC",
        "value": feature.properties.MC,
        "color": "hsl(25, 87%, 57%)"
      })
      _gobData.push({
        "id": "PES",
        "label": "PES",
        "value": feature.properties.PES,
        "color": "hsl(288, 45%, 34%)"
      })
      _gobData.push({
        "id": "RSP",
        "label": "RSP",
        "value": feature.properties.RSP,
        "color": "rgb(0,0,255)"
      })
      _gobData.push({
        "id": "FXM",
        "label": "FXM",
        "value": feature.properties.FXM,
        "color": "#FF53A1"
      })
      _gobData.push({
        "id": "PVEM",
        "label": "PVEM",
        "value": feature.properties.PVEM,
        "color": "hsl(86, 50%, 58%)"
      })
      _gobData.push({
        "id": "JHHNL",
        "label": "JHHNL",
        "value": feature.properties.JHHNL,
        "color": "#B2242B"
      })
      _gobData.push({
        "id": "NANL",
        "label": "NANL",
        "value": feature.properties.NANL,
        "color": "#78f2ee"
      })
      _gobData.push({
        "id": "VFNL",
        "label": "VFNL",
        "value": feature.properties.VFNL,
        "color": "#02a859"
      })
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
        style: "mapbox://styles/mapbox/dark-v10",
        //style: "mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko",
        //ESTILO BLANCO
        //style: "mapbox://styles/mapbox/light-v10",
        center: [long, lat],
        zoom: zoom,
        //dragPan: false
    });

    data[0].features = data[0].features.map(feature => {
      data[1].forEach(prefData => {
          if (feature.properties.id === Number(prefData['id'])) {
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
              feature.properties.SG = Number(prefData['Sin Ganador']);
              feature.properties.PARTICIPACION = Number(prefData['PARTICIPACION']);
              feature.properties.COLOR = String(prefData['COLOR']);
              //feature.properties.municipio = String(prefData['nombre']);
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
                  ['get', 'COLOR'],
                  'CERO',
                  '#f2e0ff',
                  'VEINTE',
                  '#e8c7ff',
                  'CUARENTA',
                  '#ddadff',
                  'SESENTA',
                  '#cc85ff',
                  'OCHENTA',
                  '#b957ff',
                  'CIEN',
                  '#9705ff',
                  '#CCCCCC',
              ],
              'fill-outline-color': '#FFF',
              'fill-opacity': [
                  'case',
                  ['boolean', ['feature-state', 'hover'], false],
                  0.8,
                  0.5
                  //1,
                  //0.80
              ]
          }
      })


      /*map.addLayer({
        'id': 'district-borders',
        'type': 'line',
        'source': 'district-source',
        'layout': {},
        'paint': {
        'line-color': '#000',
        'line-width': 1,
        'line-opacity':0.5
        }
        });*/

        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: 'myPopup'
        });

        map.on('mousemove', 'district-layer', function (e) {
            //map.getCanvas().style.cursor = 'pointer';
            if (e.features.length > 0) {
                if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1 && selectedDistrictRef.current != hoveredDistrictRef.current) {

                    map.setFeatureState(
                        { source: 'district-source', id: hoveredDistrictRef.current, name:hoveredMunNRef.current },
                        { party: hoveredMunPRef.current, hover: false }
                    );
                }
                
                let _hoveredDistrict = e.features[0].id;
                let _hoveredMunS = e.features[0].properties.seccion;
                let _hoveredMunN = e.features[0].properties.municipio;
                let _hoveredMunP = e.features[0].properties.GANADOR;
                let _hoveredMunPar = e.features[0].properties.PARTICIPACION;

                var content = "<b>" + "Detalles de la Sección" + "</b>" + "<br>";
                content += "Nº Sección: " + _hoveredMunS  + "<br>";
                content += "Municipio: " + _hoveredMunN  + "<br>";
                content += "Partido: " + _hoveredMunP + "<br>";
                content += "Participación: " + _hoveredMunPar + "%" + "<br>";
                popup.setLngLat(e.lngLat).setHTML(content).addTo(map);
                

                //AQUI PUEDE SER QUE FALTE SECCION
                console.log(e.features)
                map.setFeatureState(
                    { source: 'district-source', id: _hoveredDistrict,name: _hoveredMunN },
                    { party: _hoveredMunP, hover: true }
                );

                setHoveredDistrict(_hoveredDistrict);
                setHoveredMunN(_hoveredMunN);
                setHoveredMunP(_hoveredMunP);
                setHoveredMunPar(_hoveredMunPar);
                setHoveredMunS(_hoveredMunS);
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
          setHoveredMunS(null);
          setHoveredMunPar(null);
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
            let _selectedDistrictS = e.features[0].properties.seccion;
            let _selectedDistrictN = e.features[0].properties.municipio;
            let _selectedDistrictP = e.features[0].properties.GANADOR;
            let _selectedDistrictPar = e.features[0].properties.PARTICIPACION;

            var content = "<b>" + "Detalles de la Sección" + "</b>" + "<br>";
            content += "Nº Sección: " + _selectedDistrictS  + "<br>";
            content += "Municipio: " + _selectedDistrictN  + "<br>";
            content += "Partido: " + _selectedDistrictP + "<br>";
            content += "Participación: " + _selectedDistrictPar + "%" + "<br>";
            popup.setLngLat(e.lngLat).setHTML(content).addTo(map);

            console.log(e.features[0].properties.nombre);

            //AQUI PUEDE QUE FALTE SECCION
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
            setSelectedDistrictPar(_selectedDistrictPar);
            setSelectedDistrictS(_selectedDistrictS);
        }

    });

    });
  });

}, []);

  document.title = "Elecciones 2021 | MexiCOVID";  
  return (
    <div>
      <div className="district-map-wrapper">
          <div id="districtDetailMap" className={classes.map}>
              <div style={{ height: "100%" }} ref={mapContainer}></div>
          </div>
      </div>
    </div>    
  );
  
}

//{hoveredMunNRef ? hoveredMunN : ""}

const styles = () => ({
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    //maxWidth: 1600,
    margin: 'auto',
    paddingLeft: '170px',
    //paddingTop: '100px',
    //borderBottom: '1px solid white',
    //borderLeft: '1px solid white',
    //borderTop: '1px solid white',
    //borderRight: '1px solid white',
  },
  map: {
    //height: '800px',
    //width: '40vw',
    height: '700px',
    width: '30vw',
    margin: 'auto',
    borderBottom: '1px solid white',
    borderLeft: '1px solid white',
    borderTop: '1px solid white',
    borderRight: '1px solid white',
  },
  chartContainer: {
    height: '600px',
    width: '600px',
    margin: 'auto',
    paddingTop: '20px'
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
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '50px',
    //paddingBottom: '50px',
    color: colors.WHITE,
    //borderBottom: '1px solid white',
    //borderLeft: '1px solid white',
    borderTop: '1px solid white',
    //borderRight: '1px solid white',
  },
  tabla: {
    //textAlign: 'center',
    //fontSize: 40,
    //fontWeight: 'bold',
    //paddingTop: '50px'
  },
  prep: {
    color: colors.WHITE,
    textAlign: 'center'
},
  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    map: {
        minHeight: '400px',
        height: '400px',
        width: '100vw',
    },
    
  }
  
});


export default withStyles(styles)(NuevoLeon);