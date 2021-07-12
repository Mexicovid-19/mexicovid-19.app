import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';

//CSS
import "./Popup.css"

/* Chart */
import DistritosChart from './DistritosChart'

/* D3 */
import * as d3 from "d3";

/* Mapbox */
import mapboxgl from 'mapbox-gl';

/* Utils */
import * as colors from '../../constants/colors';


/* Components */
import CurulesChart from './CurulesChart';
import DiputadosCambiosChart from './DiputadosCambiosChart.js';

/* Time Chart */
import  CurulesTimeChart from './CurulesTime'

/* Data */
import distritos_csv from './data/DF_PREP_PER_848.csv'
import distritos_geojson from "./data/distritos.geojson"
import curulesTime_json from './data/curulesTime.json'
import diputados_csv from './data/cambio_ganador.csv'


import { STATES_ELECCIONES } from '../../constants/states'
import { number } from 'prop-types';

// Animation
import Fade from 'react-reveal/Fade'

const Distritos = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;

    /* Mapbox */
    //mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY
    const mapContainer = useRef(null);
    const [long, setLong] = useState(-103.695);
    const [lat, setLat] = useState(26.724);
    const [zoom, setZoom] = useState(3.8);

   

    const [districtData, setDistrictData] = useState([])
    const [diputadosData, setDiputadosData] = useState(Array.from({length: 10},()=> Array.from({length: 10}, () => 0)));
    const [district, setDistrict] = useState({edo: 19, dto: 10, participacion: 58.4});
    const [selectedDistrict, setSelectedDistrict] = useState(1910)
    const [hoveredDistrict, _setHoveredDistrict] = useState(null);
    const hoveredDistrictRef = useRef(hoveredDistrict);
    const chordColor = [
        {
            "id": "PAN_PRD_MC",
            "label": "PAN_PRD_MC",
            "color": "hsl(210, 90%, 34%)",
        }, 
        {
            "id": "MC",
            "label": "MC",
            "color": "hsl(25, 87%, 57%)",
        },
        {
            "id": "MORENA",
            "label": "MORENA",
            "color": "hsl(8, 76%, 43%)",
        }, 
        {
            "id": "PT_MORENA_PES",
            "label": "PT_MORENA_PES",
            "color": "hsl(8, 76%, 43%)",
        }, 
        {
            "id": "PAN",
            "label": "PAN",
            "color": "hsl(210, 90%, 34%)",
        }, 
        {
            "id": "PRI_PVEM_NA",
            "label": "PRI_PVEM_NA",
            "color": "hsl(135, 37%, 48%)",
        },
        {
            "id": "PAN_PRI_PRD",
            "label": "PAN_PRI_PRD",
            "color": "hsl(210, 90%, 34%)",
        }, 
        {
            "id": "PRI",
            "label": "PRI",
            "color": "hsl(135, 37%, 48%)",
        }, 
        {
            "id": "PVEM",
            "label": "PVEM",
            "color": "hsl(86, 50%, 58%)",
        }, 
        {
            "id": "PVEM_PT_MORENA",
            "label": "PVEM_PT_MORENA",
            "color": "hsl(8, 76%, 43%)",
        }, 
    ]

    const curules = [
        {
            "id": "PAN",
            "label": "PAN",
            "value": 112,
            "MR": 71,
            "RP": 41,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "MORENA",
            "label": "MORENA",
            "value": 200,
            "MR": 76,
            "RP": 124,
            "color": "hsl(8, 76%, 43%)",
        },
        {
            "id": "PRI",
            "label": "PRI",
            "value": 71,
            "MR": 31,
            "RP": 40,
            "color": "hsl(135, 37%, 48%)"
        },
        {
            "id": "PRD",
            "label": "PRD",
            "value": 15,
            "MR": 7,
            "RP": 8,
            "color": "hsl(48, 100%, 50%)"
        },
        {
            "id": "PVEM",
            "label": "PVEM",
            "value": 40,
            "MR": 28,
            "RP": 12,
            "color": "hsl(86, 50%, 58%)"
        },
        {
            "id": "PT",
            "label": "PT",
            "value": 39,
            "MR": 32,
            "RP": 7,
            "color": "hsl(3, 81%, 47%)"
        },
        {
            "id": "MC",
            "label": "MC",
            "value": 23,
            "MR": 7,
            "RP": 16,
            "color": "rgb(255, 121, 2)"
        },
    ]

    var mergedGeoJSON;

    const setHoveredDistrict = data => {
        hoveredDistrictRef.current = data;
        _setHoveredDistrict(data);
    };


    var loadFiles = [
        d3.json(distritos_geojson),
        d3.csv(distritos_csv),
        d3.csv(diputados_csv)
        /* d3.json("data/distritos_fed.geojson"),
        d3.csv("data/distritos.csv"), */
    ]; 

    const setUpData = (id) => {
      let _districtData = []
      mergedGeoJSON.features.map(feature =>{
        if(feature.properties.distrito_id === id){
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
            if(feature.properties.MC > 0){
                _districtData.push({
                    "id": "MC",
                    "label": "MC",
                    "value": feature.properties.MC,
                    "color": "#FF7A00",
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

            /* Cambiar */
            if(feature.properties.FXM > 0){
                _districtData.push({
                    "id": "FXM",
                    "label": "FXM",
                    "value": feature.properties.FXM,
                    "color": "hsl(86, 50%, 58%)",
                    "width": 60,
                })
            }
            if(feature.properties.CAND_IND_1 > 0){
                _districtData.push({
                    "id": "CAND-IND-1",
                    "label": "CAND-IND-1",
                    "value": feature.properties.CAND_IND_1,
                    "color": "hsl(86, 50%, 58%)",
                    "width": 100,
                })
            }
            if(feature.properties.CAND_IND_2 > 0){
                _districtData.push({
                    "id": "CAND-IND-2",
                    "label": "CAND-IND-2",
                    "value": feature.properties.CAND_IND_2,
                    "color": "hsl(86, 50%, 58%)",
                    "width": 100,
                })
            }
            if(feature.properties.CAND_IND_3 > 0){
                _districtData.push({
                    "id": "CAND-IND-3",
                    "label": "CAND-IND-3",
                    "value": feature.properties.CAND_IND_3,
                    "color": "hsl(86, 50%, 58%)",
                    "width": 100,
                })
            }
            if(feature.properties.PAN_PRI_PRD > 0){
                _districtData.push({
                    "id": "PAN-PRI-PRD",
                    "label": "PAN-PRI-PRD",
                    "value": feature.properties.PAN_PRI_PRD,
                    "color": "hsl(210, 90%, 34%)",
                    "width": 100,
                })
            }
            if(feature.properties.PAN_PRI > 0){
                _districtData.push({
                    "id": "PAN-PRI",
                    "label": "PAN-PRI",
                    "value": feature.properties.PAN_PRI,
                    "color": "hsl(210, 90%, 34%)",
                    "width": 100,
                })
            }
            if(feature.properties.PAN_PRD > 0){
                _districtData.push({
                    "id": "PAN-PRD",
                    "label": "PAN-PRD",
                    "value": feature.properties.PAN_PRD,
                    "color": "hsl(210, 90%, 34%)",
                    "width": 100,
                })
            }
            if(feature.properties.PRI_PRD > 0){
                _districtData.push({
                    "id": "PRI-PRD",
                    "label": "PRI-PRD",
                    "value": feature.properties.PRI_PRD,
                    "color": "hsl(135, 37%, 48%)",
                    "width": 100,
                })
            }
            if(feature.properties.PVEM_PT_MORENA > 0){
                _districtData.push({
                    "id": "PVEM-PT-MORENA",
                    "label": "PVEM-PT-MORENA",
                    "value": feature.properties.PVEM_PT_MORENA,
                    "color": "hsl(8, 76%, 43%)",
                    "width": 100,
                })
            }
            if(feature.properties.PVEM_PT > 0){
                _districtData.push({
                    "id": "PVEM-PT",
                    "label": "PVEM-PT",
                    "value": feature.properties.PVEM_PT,
                    "color": "hsl(86, 50%, 58%)",
                    "width": 100,
                })
            }
            if(feature.properties.PVEM_MORENA > 0){
                _districtData.push({
                    "id": "PVEM-MORENA",
                    "label": "PVEM-MORENA",
                    "value": feature.properties.PVEM_MORENA,
                    "color": "hsl(8, 76%, 43%)",
                    "width": 100,
                })
            }
            if(feature.properties.PT_MORENA > 0){
                _districtData.push({
                    "id": "PT-MORENA",
                    "label": "PT-MORENA",
                    "value": feature.properties.PT_MORENA,
                    "color": "hsl(8, 76%, 43%)",
                    "width": 100,
                })
            }
        }
      })
      ////console.log(_stateData)
      setDistrictData(_districtData)
    }

    const setUpChordData = (data) => {
        const matrix = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ];

        for(var i = 0; i < data.length; i++){
            if(data[i].ganador18 == 'PAN_PRD_MC'){
                if(data[i].ganador21 == 'MC'){
                    matrix[2][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][0] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][0] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'MC'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][1] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][1] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'MORENA'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][2] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][2] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PT_MORENA_PES'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][3] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][3] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PAN'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][4] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][4] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PRI_PVEM_NA'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][5] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][5] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PAN_PRI_PRD'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][6] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][6] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PRI'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][7] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][7] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PVEM'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][8] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM_PT_MORENA'){
                    matrix[9][8] = Number(data[i].numero_cambio);
                }
            } else if(data[i].ganador18 == 'PVEM_PT_MORENA'){
                if(data[i].ganador21 == 'PAN_PRD_MC'){
                    matrix[0][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MC'){
                    matrix[2][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'MORENA'){
                    matrix[1][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PT_MORENA_PES'){
                    matrix[3][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN'){
                    matrix[4][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI_PVEM_NA'){
                    matrix[5][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PAN_PRI_PRD'){
                    matrix[6][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PRI'){
                    matrix[7][9] = Number(data[i].numero_cambio);
                } else if(data[i].ganador21 == 'PVEM'){
                    matrix[8][9] = Number(data[i].numero_cambio);
                }
            } 
        }
        
        //console.log(matrix);

        setDiputadosData(matrix);
        //console.log(diputadosData);
        console.log(chordColor)
        
    }


    useEffect(() => {
        let map = new mapboxgl.Map({
            container: mapContainer.current,
            //style: "mapbox://styles/mapbox/dark-v10",
            style: "mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko",
            center: [long, lat],
            zoom: zoom
        });

        Promise.all(loadFiles).then(function (data){
            // Add zoom and rotation controls to the map.
            map.addControl(new mapboxgl.NavigationControl());
            
            //console.log("data[1]: ", data[0]);

            data[0].features = data[0].features.map((feature, i) => {
                var prefData = data[1][i]
                feature.id = Number(prefData['distrito_id']);
                feature.properties.distrito_id = Number(prefData['distrito_id']);
                feature.properties.dto = Number(prefData['dto']);
                feature.properties.edo = Number(prefData['edo']);
                /* PARTIDOS */
                feature.properties.PAN = Number(prefData['PAN']);
                feature.properties.PRI = Number(prefData['PRI']);
                feature.properties.PRD = Number(prefData['PRD']);
                feature.properties.PVEM = Number(prefData['PVEM']);
                feature.properties.PT = Number(prefData['PT']);
                feature.properties.MC = Number(prefData['MC']);
                feature.properties.MORENA = Number(prefData['MORENA']);
                feature.properties.PES = Number(prefData['PES']);
                feature.properties.RSP = Number(prefData['RSP']);
                feature.properties.FXM = Number(prefData['FXM']);
                /* CANDIDATOS */
                feature.properties.CAND_IND_1 = Number(prefData['CAND_IND_1']);
                feature.properties.CAND_IND_2 = Number(prefData['CAND_IND_2']);
                feature.properties.CAND_IND_3 = Number(prefData['CAND_IND_3']);

                /* ALIANZAS */
                feature.properties.PAN_PRI_PRD = Number(prefData['PAN-PRI-PRD']);
                feature.properties.PAN_PRD = Number(prefData['PAN-PRD']);
                feature.properties.PAN_PRI = Number(prefData['PAN-PRI']);
                feature.properties.PRI_PRD = Number(prefData['PRI-PRD']);
                feature.properties.PVEM_PT_MORENA = Number(prefData['PVEM-PT-MORENA']);
                feature.properties.PVEM_PT = Number(prefData['PVEM-PT']);
                feature.properties.PVEM_MORENA = Number(prefData['PVEM-MORENA']);
                feature.properties.PT_MORENA = Number(prefData['PT-MORENA']);
                feature.properties.JHH = Number(prefData['JHH']);
                feature.properties.VXM = Number(prefData['VXM']);
                feature.properties.TOTAL = Number(prefData['TOTAL']);

            
                feature.properties.GANADOR_2018 = String(prefData['GANADOR_2018']);
                feature.properties.GANADOR_2021 = String(prefData['GANADOR_2021']);
                feature.properties.PARTICIPACION = String(prefData['PARTICIPACION'])
                
                return feature;
            });

            //setup geosjon
            mergedGeoJSON = data[0];
            //console.log(mergedGeoJSON)
            let diputadosCSV = data[2];
            
            setUpData(selectedDistrict)

            setUpChordData(diputadosCSV);
            console.log('hola');
            console.log(diputadosData);

            //map.scrollZoom.disable();

            map.once("load", function () {

                map.addSource('district-source', {
                    'type': 'geojson',
                    'data': mergedGeoJSON
                });
                ////console.log(mnDistricts)

                map.addLayer({
                    'id': 'district-layer',
                    'type': 'fill',
                    'source': 'district-source',
                    'layout': {},
                    'paint': {
                        'fill-color': [
                            'match',
                            ['get', 'GANADOR_2021'],
                            'PAN',
                                '#0055BF',
                            'PRI',
                                '#4da864',
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
                            'FXM',
                                '#FF53A1',
                            'RSP',
                                '#313233',
                            'PAN_PRI_PRD',
                                '#0055BF',
                            'PAN_PRI',
                                '#0055BF',
                            'PAN_PRD',
                                '#0055BF',
                            'PRI_PRD',
                                '#FF0018',
                            'PVEM_PT_MORENA',
                                '#960016',
                            'PVEM_PT',
                                '#A2CD40',
                            'PVEM_MORENA',
                                '#960016',
                            'PT_MORENA_PES',
                                '#960016',
                            'CAND_IND-1',
                                '#8FA7A9',
                            'CAND_IND-2',
                                '#8FA7A9',
                            'CAND_IND-3',
                                '#8FA7A9',
                            'Sin Ganador',
                                '#CCCCCC',
                                '#CCCCCC',
                        ],
                        'fill-outline-color': '#FFF',
                        'fill-opacity': [
                            'case',
                            ['boolean', ['feature-state', 'hover'], false],
                            .8,
                            0.5
                        ]
                    }
                });

                var popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,
                    className: 'myPopup'
                });

                map.on('mousemove', 'district-layer', function (e) {
                    //map.getCanvas().style.cursor = 'pointer';
                    if (e.features.length > 0) {
                        if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1) {

                            map.setFeatureState(
                                { source: 'district-source', id: hoveredDistrictRef.current },
                                { hover: false }
                            );
                        }
                        console.log(e.features[0])
                        var description = `<div><h3 class="popupTitle"><strong>${STATES_ELECCIONES[e.features[0].properties.ENTIDAD-1].title || '-'}</strong></h3><h3 class="popupTitle"><strong>Distrito: ${e.features[0].properties.dto|| '-'}</strong></h3><div class="popupLogosContainer"><div><img class="popupImg" src='./img/elecciones/partidos/${e.features[0].properties.GANADOR_2018}.png'/><p class="popupYear">2018</p></div><div><img class="popupImg"  src='./img/elecciones/partidos/${e.features[0].properties.GANADOR_2021}.png'/><p class="popupYear">2021</p></div></div></div>`
                        popup.setLngLat(e.lngLat).setHTML(description).addTo(map);

                        let _hoveredDistrict = e.features[0].id;
                        
                        map.setFeatureState(
                            { source: 'district-source', id: _hoveredDistrict },
                            { hover: true }
                        );

                        setHoveredDistrict(_hoveredDistrict);
                    }

                });

                // When the mouse leaves the state-fill layer, update the feature state of the
                // previously hovered feature.
                map.on('mouseleave', 'district-layer', function () {
                    if (hoveredDistrictRef.current) {
                        map.setFeatureState(
                            { source: 'district-source', id: hoveredDistrictRef.current },
                            { hover: false }
                        );
                    }
                    //map.getCanvas().style.cursor = '';
                    popup.remove();
                    setHoveredDistrict(null);
                });

                map.on('move', () => {
                    const { lng, lat } = map.getCenter();

                    setLong(lng.toFixed(4));
                    setLat(lat.toFixed(4));
                    setZoom(map.getZoom().toFixed(2));
                });

                map.on('click', 'district-layer', function(e) {
                    let _selectedDistrict = e.features[0].id;
                    setUpData(_selectedDistrict)
                    setSelectedDistrict(_selectedDistrict)
                    setDistrict({dto: e.features[0].properties.dto, edo: e.features[0].properties.edo, participacion: e.features[0].properties.PARTICIPACION})
                })

            });
        })
        

    }, []);

    

    return (
        <div>
            <div className={classes.itemsContainer}>
                {/* Map */}
                <Fade bottom>
                <div className="district-map-wrapper">
                    <div id="districtDetailMap" className={classes.map}>
                        <div style={{ height: "100%" }} ref={mapContainer}></div>
                    </div>
                </div>
                {/* pie chart */}
                <div className={classes.outerChartContainer}>
                    <h2 className={classes.subtitle}>Estado: {STATES_ELECCIONES[district.edo-1].title}</h2>
                    <h2 className={classes.subtitle}>Distrito: {district.dto}</h2>
                    <p className={classes.prep}>Fuente: Cómputos Distritales</p>
                    <p className={classes.prep}>Participación: {district.participacion}%</p>
                    {districtData.length !== 0 && (
                        <div className={classes.chartContainer}>
                            <DistritosChart data={districtData}/>
                        </div>
                    )}
                    <p className={classes.prep}>Fuente: Cómputos Distritales</p>
                </div>
                </Fade>
            </div>

            {/* Chord  chart */}
            <Fade bottom>
            <div className={classes.outerChartContainer2}>
                <h2 className={classes.subtitle}>Cambio de diputados de mayoría relativa por coalición ganadora o partido del 2018 al 2021</h2>
                {diputadosData.length !== 0 && (
                    <div className={classes.chartContainer}>
                        <DiputadosCambiosChart matrix={diputadosData}/>
                    </div>
        
                )}
            </div>
            </Fade>

            {/* curules  chart */}
            <Fade bottom>
            <div className={classes.outerChartContainer2}>
                <h2 className={classes.subtitle}>Estimación de la distribución de la legislatura LXV</h2>
                {districtData.length !== 0 && (
                    <div className={classes.chartContainer}>
                        <CurulesChart data={curules}/>
                    </div>
        
                )}
            </div>
            </Fade>

            {/* curules  chart */}
            <Fade bottom>
            <div className={classes.outerChartContainer2}>
            <h2 className={classes.subtitle}>Número de diputados en el Congreso por partido (elecciones intermedias de 1997-2021; totales por año suman 500 curules</h2>
            {districtData.length !== 0 && (
                <div className={classes.chordChartContainer}>
                    <CurulesTimeChart data={curulesTime_json}/>
                </div>
        
                )}
            </div>
            </Fade>
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
    minHeight: '800px',
    width: '50vw',
    margin: 'auto',
    borderBottom:  '1px solid white',
  },
  outerChartContainer: {
    paddingTop: '30px',
    minWidth: '50vw',
    borderLeft:  '1px solid white',
    borderBottom:  '1px solid white',
    borderRight:  '1px solid white',
  },
  outerChartContainer2: {
    paddingTop: '50px',
    borderBottom:  '1px solid white',
  },
  chartContainer: {
    height: '600px',
    minHeight: '500px',
    width: '50vw',
    flex: 1,
    margin: 'auto'
    //padding: '50px',
  },
  chordChartContainer: {
    height: '700px',
    minHeight: '500px',
    width: '60vw',
    flex: 1,
    margin: 'auto'
  },
  subtitle: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      maxWidth: '95%',
      margin: 'auto',
      color: colors.WHITE
  },
  prep: {
      color: colors.WHITE,
      textAlign: 'center'
  },

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    itemsContainer: {
        display: 'block',
        margin: 'auto',
    },
    map: {
        minHeight: '400px',
        height: '400px',
        width: '100vw',
    },
    outerChartContainer: {
        padding: '0px',
        paddingTop: '30px',
        borderLeft:  '1px solid white',
        borderBottom:  '1px solid white',
        borderRight:  '1px solid white',
    },
    outerChartContainer2: {
        padding: '0px',
        paddingTop: '30px',
    },
    chartContainer: {
        height: '550px',
        width: '100vw',
        flex: 1,
        margin: 'auto',
        //padding: '50px 10px',
    },
    subtitle: {
      fontSize: 20,
    },
  }
  
});

export default withStyles(styles)(Distritos); 