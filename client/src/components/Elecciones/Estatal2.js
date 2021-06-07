import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import PieChart_Estados from './PieChart_Estados.js'
import HeatMap_Estados from './HeatMap_Estados.js';
import Header from '../Header';

/* Mapbox */
import * as d3 from 'd3';
import estadosRes from './data/mx_states.json'
import estados_geojson from "./data/mx_states.geojson";
//import estados_csv from "./data/mx_states.csv";
//import gobernadores_csv from "./data/gobernadores.csv"
//import candidatos_estados_csv from "./data/nombres_candidatos.csv";
import resultados_csv from "./data/estados.csv";
import mapboxgl from 'mapbox-gl';
import { axisLeft } from 'd3';
import { HeatMap } from '@nivo/heatmap';

// CSS
import "./Popup.css"

// Utils
import * as colors from '../../constants/colors';


const Estatal = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;
    document.title = "Elecciones 2021 | MexiCOVID"
    var prevSelectedState = null;
    /* Mapbox */
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
    const mapContainer = useRef(null);

    const [long, setLong] = useState(-101.68);
    const [lat, setLat] = useState(21.1236);
    const [zoom, setZoom] = useState(4);

    const [stateData, setStateData] = useState([])
    // const [selectedStateName, setSelectedStateName] = useState(data[0].name)
    const [selectedState, _setSelectedState] = useState(19)
    const [hoveredState, _setHoveredState] = useState(null);
    const hoveredStateRef = useRef(hoveredState);
    const selectedStateRef = useRef(selectedState);
    var mergedGeoJSON;
    var resultados;
    //var alianzas_estados;
    //var candidatos_estados;

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
    const [selectedStateN, _setSelectedStateN] = useState('Nuevo León');
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
        d3.csv(resultados_csv)
        // d3.csv(estados_csv),
        // d3.csv(gobernadores_csv),
        // d3.csv(candidatos_estados_csv)
    ];

    const setupGeoJson = () => {
        console.table(estados_geojson)
    }

    const setUpData = (id) => {
      let _stateData = [] 
    //   var index = alianzas_estados.map(function(e) { return e.ID_ESTADO; }).indexOf(id.toString());
    //   var indexCandidatos = candidatos_estados.map(function(e) { return e.ID_ESTADO; }).indexOf(id.toString());
      //console.log(alianzas_estados[index].PAN)
        // console.log(feature.properties.PARTIDO);
    
      for(var i = 0; i < resultados.length; i++){
        if(resultados[i].ID_ESTADO === id.toString()){
            if(resultados[i].PARTIDO === "PAN"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO === "PRI"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PRI",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(135, 37%, 48%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PRD"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PRD",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(48, 100%, 50%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PVEM"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PVEM",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(86, 50%, 58%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PT") {
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PT",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(3, 81%, 47%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MC"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MC",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(25, 87%, 57%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PANAL"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PANAL",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(181, 80%, 40%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PES"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PES",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(288, 45%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "RSP"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "RSP",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(180, 1%, 19%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "FXM"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "FXM",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(333, 78%, 65%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAN_PRD"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN_PRD",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PT_MORENA"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PT_MORENA",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PRI_PRD"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PRI_PRD",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(135, 37%, 48%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PT_PVEM"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PT_PVEM",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAN_PRI_PRD"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN_PRI_PRD",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PARTIDO_BAJA_CALIFORNIA"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PARTIDO_BAJA_CALIFORNIA",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(20, 100%, 60%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAN_PRI_PRD_PRS_HUMANISTA"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN_PRI_PRD_PRS_HUMANISTA",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "BCS_COHERENTE"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "BCS_COHERENTE",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(355, 88%, 20%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PT_PVEM_PANAL"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PT_PVEM_PANAL",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PT_PANAL"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PT_PANAL",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "FUERZA_SOCIAL_POR_MEXICO"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "FUERZA_SOCIAL_POR_MEXICO",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(358, 88%, 40%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PANAL"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PANAL",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "LEVANTATE_POR_NAYARIT"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "LEVANTATE_POR_NAYARIT",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(326, 70%, 82%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "VIVA_NAYARIT"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "VIVA_NAYARIT",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(44, 97%, 53%)"
                    })
                } 
            }
            if(resultados[i].PARTIDO == "INDEPENDIENTE"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "Independiente",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(180, 4%, 56%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PVEM_PT"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PVEM_PT",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(86, 50%, 58%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PARTIDO_SINALOENSE"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PARTIDO_SINALOENSE",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "MORENA_PT_PVEM_PANAL_PES"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "MORENA_PT_PVEM_PANAL_PES",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 76%, 43%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PRI_PAN_PRD_PAC"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PRI_PAN_PRD_PAC",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "IMPACTO_SOCIAL_SI"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "IMPACTO_SOCIAL_SI",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(349, 92%, 46%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAZ"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAZ",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(329, 82%, 53%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PARTIDO_DEL_PUEBLO"){
                if(resultados[i].PORCENTAJE > 0){
                _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PARTIDO_DEL_PUEBLO",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(8, 53%, 44%)"
                    })
                }
            }
            if(resultados[i].PARTIDO == "PAN_IND"){
                if(resultados[i].PORCENTAJE > 0){
                    _stateData.push({
                        "id": resultados[i].CANDIDATO,
                        "label": "PAN_IND",
                        "value": resultados[i].PORCENTAJE,
                        "color": "hsl(210, 90%, 34%)"
                    })
                }
            }
         
        }
    }
       
      console.log(_stateData)
      setStateData(_stateData)
    } 

    const setUpWinner = () => {
        var max = -1;
        var winners = [];
        for(var i = 0; i < resultados.length - 1; i++){
            if(i == 0){
                winners.push({
                    "ID_ESTADO": resultados[i].ID_ESTADO,
                    "GANADOR": resultados[i].GANADOR
                })
            } else if(resultados[i].ID_ESTADO != resultados[i+1].ID_ESTADO){
                winners.push({
                    "ID_ESTADO": resultados[i+1].ID_ESTADO,
                    "GANADOR": resultados[i+1].GANADOR
                })
            }
        }
        console.log(winners)
        mergedGeoJSON.features.map(feature =>{
            console.log(winners.length)
            for(var i = 0; i < winners.length; i++){
                if(Number(winners[i].ID_ESTADO) == feature.properties.CVE_ENT){
                    feature.properties.GP = winners[i].GANADOR;
                }
            }
            console.log(feature.properties.GP);
        })
    }

    useEffect(() => {
        Promise.all(loadFiles).then(function (data) {
        setupGeoJson()
        let map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko",
            center: [long, lat],
            zoom: zoom,
            dragPan: false
        });
        data[0].features = data[0].features.map(feature => {
            feature.properties.GP = "Sin Ganador";
            return feature;
        });
        mergedGeoJSON = data[0];
        console.log(mergedGeoJSON);
        resultados = data[1];
        console.log(resultados);
        setUpData(selectedState);
        setUpWinner();

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
                        '#0957a5',
                        'PRI',
                        '#4da864',
                        'PRD',
                        '#ffcc00',
                        'PVEM',
                        '#9bc95e',
                        'PT',
                        '#d92017',
                        'MC',
                        '#f18132',
                        'PANAL',
                        '#14b5b8',
                        'MORENA',
                        '#c1311a',
                        'PES',
                        '#6e307e',
                        'FXM',
                        '#eb609f',
                        'RSP',
                        '#303131',
                        'PAN_PRD',
                        '#0957a5',
                        'PT_MORENA',
                        '#c1311a',
                        'PRI_PRD',
                        '#0055BF',
                        'MORENA_PT_PVEM',
                        '#c1311a',
                        'PAN_PRI_PRD',
                        '#0957a5',
                        'PARTIDO_BAJA_CALIFORNIA',
                        '#ff7733',
                        'PAN_PRI_PRD_PRS_HUMANISTA',
                        '#0957a5',
                        'BCS_COHERENTE',
                        '#60060e',
                        'MORENA_PT_PVEM_PANAL',
                        '#c1311a',
                        'PT_PVEM_MORENA_PANAL',
                        '#c1311a',
                        'MORENA_PT_PANAL',
                        '#c1311a',
                        'FUERZA_SOCIAL_POR_MEXICO',
                        '#c00c12',
                        'MORENA_PANAL',
                        '#c1311a',
                        'LEVANTATE_POR_NAYARIT',
                        '#f1b1d5',
                        'VIVA_NAYARIT',
                        '#fbbd13',
                        'CL1',
                        '#8a9393',
                        'PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR',
                        '#0957a5',
                        'PVEM_PT',
                        '#9bc95e',
                        'MORENA_PARTIDO_SINALOENSE',
                        '#c1311a',
                        'MORENA_PT_PVEM_PANAL_PES',
                        '#c1311a',
                        'PRI_PAN_PRD_PAC',
                        '#4da864',
                        'IMPACTO_SOCIAL_SI',
                        '#e10931',
                        'PAZ',
                        '#e9258a',
                        'PARTIDO DEL PUEBLO',
                        '#ac4535',
                        'Sin Ganador',
                        '#CCCCCC',
                        '#CCCCCC'
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
                className: 'myPopup'
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
        


                    //console.log(e.features)
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
                if (hoveredStateRef.current && selectedStateRef.current != hoveredStateRef.current && selectedState == null) {
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
                    console.log(_selectedState)
                    let _selectedStateN = e.features[0].properties.ESTADO;
                    let _selectedStateP = e.features[0].properties.GP;
        
                    var content = "<b>" + "Detalles del Estado" + "</b>" + "<br>";
                    content += "Estado: " + _selectedStateN  + "<br>";
                    content += "Partido: " + _selectedStateP + "<br>";
                    popup.setLngLat(e.lngLat).setHTML(content).addTo(map);
        
                    //console.log(e.features[0].properties.ESTADO);
        
                    //console.log(e.features)
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
        <div className={classes.itemsContainer}>
            <div id="hoveredDetailMap" className={classes.map}>
                <div style={{ height: "100%" }} ref={mapContainer}></div>
            </div>
            <div className = {classes.outerChartContainer}>
               {stateData.length != 0 && (
                 <div className = {classes.chartContainer}>
                    <h2 className={classes.subtitle}><strong>Distribución de Votos {selectedStateN}</strong></h2>
                   <PieChart_Estados data = {stateData}/>
                   </div>
               )}
              </div>
       
        </div>
    );
}

const styles = () => ({
  /* Desktop */
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
  },
  map: {
    height: 'calc(100vh -  148px)',
    width: '50vw',
    margin: 'auto',
    borderBottom:  '1px solid white',
  },
  outerChartContainer: {
    paddingTop: '30px',
    borderLeft:  '1px solid white',
    borderBottom:  '1px solid white',
    borderRight:  '1px solid white',
  },
  chartContainer: {
    height: '600px',
    width: '50vw',
    flex: 1,
    margin: 'auto',
    padding: '50px',
  },
  subtitle: {
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: colors.WHITE
  },
  chartTitle:{
    fontSize: '20px',
    textAlign: 'center'
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
    outerChartContainer: {
        padding: '10px',
        paddingTop: '30px',
        borderLeft:  '1px solid white',
        borderBottom:  '1px solid white',
        borderRight:  '1px solid white',
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

export default withStyles(styles)(Estatal);