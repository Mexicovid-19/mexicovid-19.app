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
import gobernadores_csv from "./data/gobernadores.csv"
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
    var alianzas_estados;

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
        d3.csv(estados_csv),
        d3.csv(gobernadores_csv)
    ];

    const setupGeoJson = () => {
        console.table(estados_geojson)
    }

    const setUpHeatMapData = () => {
        // PASAR INFORMACION DEL MERGEDGEOJSON A ARRAY
    }

    const setUpData = (id) => {
      let _stateData = [] 
      var index = alianzas_estados.map(function(e) { return e.ID_ESTADO; }).indexOf(id.toString());
      console.log(alianzas_estados[index])
      
      // REVISAR PREP PARA CONSIDERAR SUMA DE VOTOS EN ALIANZAS
      mergedGeoJSON.features.map(feature =>{
        if(feature.properties.CVE_ENT == id && index != -1){
          if(alianzas_estados[index].PAN == '1'){
            _stateData.push({
              "id": "PAN",
              "label": "PAN",
              "value": feature.properties.PAN,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].PRI == '1'){
            _stateData.push({
              "id": "PRI",
              "label": "PRI",
              "value": feature.properties.PRI,
              "color": "hsl(135, 37%, 48%)"
            })
          }
          if(alianzas_estados[index].PRD == '1'){
            _stateData.push({
              "id": "PRD",
              "label": "PRD",
              "value": feature.properties.PRD,
              "color": "hsl(48, 100%, 50%)"
            })
          }
          if(alianzas_estados[index].PVEM == '1'){
            _stateData.push({
              "id": "PVEM",
              "label": "PVEM",
              "value": feature.properties.PVEM,
              "color": "hsl(86, 50%, 58%)"
            })
          }
          if(alianzas_estados[index].PT == '1'){
            _stateData.push({
              "id": "PT",
              "label": "PT",
              "value": feature.properties.PT,
              "color": "hsl(3, 81%, 47%)"
            })
          }
          if(alianzas_estados[index].MC == '1'){
            _stateData.push({
              "id": "MC",
              "label": "MC",
              "value": feature.properties.MC,
              "color": "hsl(25, 87%, 57%)"
            })
          }
          if(alianzas_estados[index].PANAL == '1'){
            _stateData.push({
              "id": "PANAL",
              "label": "PANAL",
              "value": feature.properties.PANAL,
              "color": "hsl(181, 80%, 40%)"
            })
          }
          if(alianzas_estados[index].MORENA == '1'){
            _stateData.push({
              "id": "MORENA",
              "label": "MORENA",
              "value": feature.properties.MORENA,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].PES == '1'){
            _stateData.push({
              "id": "PES",
              "label": "PES",
              "value": feature.properties.PES,
              "color": "hsl(288, 45%, 34%)"
            })
          }
          if(alianzas_estados[index].FXM == '1'){
            _stateData.push({
              "id": "FXM",
              "label": "FXM",
              "value": feature.properties.FXM,
              "color": "hsl(333, 78%, 65%)"
            })
          }
          if(alianzas_estados[index].RSP == '1'){
            _stateData.push({
              "id": "RSP",
              "label": "RSP",
              "value": feature.properties.RSP,
              "color": "hsl(180, 1%, 19%)"
            })
          }
          if(alianzas_estados[index].PAN_PRD == '1'){
            _stateData.push({
              "id": "PAN_PRD",
              "label": "PAN_PRD",
              "value": feature.properties.PAN_PRD,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].PT_MORENA == '1'){
            _stateData.push({
              "id": "PT_MORENA",
              "label": "PT_MORENA",
              "value": feature.properties.PT_MORENA,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].PRI_PRD == '1'){
            _stateData.push({
              "id": "PRI_PRD",
              "label": "PRI_PRD",
              "value": feature.properties.PRI_PRD,
              "color": "hsl(135, 37%, 48%)"
            })
          }
          if(alianzas_estados[index].MORENA_PT_PVEM == '1'){
            _stateData.push({
              "id": "MORENA_PT_PVEM",
              "label": "MORENA_PT_PVEM",
              "value": feature.properties.MORENA_PT_PVEM,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].PAN_PRI_PRD == '1'){
            _stateData.push({
              "id": "PAN_PRI_PRD",
              "label": "PAN_PRI_PRD",
              "value": feature.properties.PAN_PRI_PRD,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].PARTIDO_BAJA_CALIFORNIA == '1'){
            _stateData.push({
              "id": "PARTIDO_BAJA_CALIFORNIA",
              "label": "PARTIDO_BAJA_CALIFORNIA",
              "value": feature.properties.PARTIDO_BAJA_CALIFORNIA,
              "color": "hsl(20, 100%, 60%)"
            })
          }
          if(alianzas_estados[index].PAN_PRI_PRD_PRS_HUMANISTA == '1'){
            _stateData.push({
              "id": "PAN_PRI_PRD_PRS_HUMANISTA",
              "label": "PAN_PRI_PRD_PRS_HUMANISTA",
              "value": feature.properties.PAN_PRI_PRD_PRS_HUMANISTA,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].BCS_COHERENTE == '1'){
            _stateData.push({
              "id": "BCS_COHERENTE",
              "label": "BCS_COHERENTE",
              "value": feature.properties.BCS_COHERENTE,
              "color": "hsl(355, 88%, 20%)"
            })
          }
          if(alianzas_estados[index].MORENA_PT_PVEM_PANAL == '1'){
            _stateData.push({
              "id": "MORENA_PT_PVEM_PANAL",
              "label": "MORENA_PT_PVEM_PANAL",
              "value": feature.properties.MORENA_PT_PVEM_PANAL,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].MORENA_PT_PANAL == '1'){
            _stateData.push({
              "id": "MORENA_PT_PANAL",
              "label": "MORENA_PT_PANAL",
              "value": feature.properties.MORENA_PT_PANAL,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].FUERZA_SOCIAL_POR_MEXICO == '1'){
            _stateData.push({
              "id": "FUERZA_SOCIAL_POR_MEXICO",
              "label": "FUERZA_SOCIAL_POR_MEXICO",
              "value": feature.properties.FUERZA_SOCIAL_POR_MEXICO,
              "color": "hsl(358, 88%, 40%)"
            })
          }
          if(alianzas_estados[index].MORENA_PANAL == '1'){
            _stateData.push({
              "id": "MORENA_PANAL",
              "label": "MORENA_PANAL",
              "value": feature.properties.MORENA_PANAL,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].LEVANTATE_POR_NAYARIT == '1'){
            _stateData.push({
              "id": "LEVANTATE_POR_NAYARIT",
              "label": "LEVANTATE_POR_NAYARIT",
              "value": feature.properties.LEVANTATE_POR_NAYARIT,
              "color": "hsl(326, 70%, 82%)"
            })
          }
          if(alianzas_estados[index].VIVA_NAYARIT == '1'){
            _stateData.push({
              "id": "VIVA_NAYARIT",
              "label": "VIVA_NAYARIT",
              "value": feature.properties.VIVA_NAYARIT,
              "color": "hsl(44, 97%, 53%)"
            })
          }
          if(alianzas_estados[index].CI1 == '1'){
            _stateData.push({
              "id": "CI1",
              "label": "Independiente",
              "value": feature.properties.CI1,
              "color": "hsl(180, 4%, 56%)"
            })
          }
          if(alianzas_estados[index].PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR == '1'){
            _stateData.push({
              "id": "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR",
              "label": "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR",
              "value": feature.properties.PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].PVEM_PT == '1'){
            _stateData.push({
              "id": "PVEM_PT",
              "label": "PVEM_PT",
              "value": feature.properties.PVEM_PT,
              "color": "hsl(86, 50%, 58%)"
            })
          }
          if(alianzas_estados[index].MORENA_PARTIDO_SINALOENSE == '1'){
            _stateData.push({
              "id": "MORENA_PARTIDO_SINALOENSE",
              "label": "MORENA_PARTIDO_SINALOENSE",
              "value": feature.properties.MORENA_PARTIDO_SINALOENSE,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].MORENA_PT_PVEM_PANAL_PES == '1'){
            _stateData.push({
              "id": "MORENA_PT_PVEM_PANAL_PES",
              "label": "MORENA_PT_PVEM_PANAL_PES",
              "value": feature.properties.MORENA_PT_PVEM_PANAL_PES,
              "color": "hsl(8, 76%, 43%)"
            })
          }
          if(alianzas_estados[index].PRI_PAN_PRD_PAC == '1'){
            _stateData.push({
              "id": "PRI_PAN_PRD_PAC",
              "label": "PRI_PAN_PRD_PAC",
              "value": feature.properties.PRI_PAN_PRD_PAC,
              "color": "hsl(210, 90%, 34%)"
            })
          }
          if(alianzas_estados[index].IMPACTO_SOCIAL_SI == '1'){
            _stateData.push({
              "id": "IMPACTO_SOCIAL_SI",
              "label": "IMPACTO_SOCIAL_SI",
              "value": feature.properties.IMPACTO_SOCIAL_SI,
              "color": "hsl(349, 92%, 46%)"
            })
          }
          if(alianzas_estados[index].PAZ == '1'){
            _stateData.push({
              "id": "PAZ",
              "label": "PAZ",
              "value": feature.properties.PAZ,
              "color": "hsl(329, 82%, 53%)"
            })
          }
          if(alianzas_estados[index].PARTIDO_DEL_PUEBLO == '1'){
            _stateData.push({
              "id": "PARTIDO_DEL_PUEBLO",
              "label": "PARTIDO_DEL_PUEBLO",
              "value": feature.properties.PARTIDO_DEL_PUEBLO,
              "color": "hsl(8, 53%, 44%)"
            })
          }
         
        }
      }) 
      console.log(_stateData)
      setStateData(_stateData)
    }

    const getWinner = () => {
      var max = -1
      mergedGeoJSON.features.map(feature =>{
        var indexWinner = alianzas_estados.map(function(e) { return e.ID_ESTADO; }).indexOf(feature.properties.CVE_ENT.toString());
        console.log(indexWinner);
        console.log('hola')
        if(indexWinner == -1){
          feature.properties.GP = "Sin Ganador"
        } else{
          if(alianzas_estados[indexWinner].PAN == "1" && feature.properties.PAN > max){ 
            max = feature.properties.PAN
            feature.properties.GP = "PAN"
          } 
          if(alianzas_estados[indexWinner].PAN_PRD == "1" && feature.properties.PAN_PRD > max){
            max = feature.properties.PAN_PRD
            // max = feature.properties.PAN + feature.properties.PRD
            feature.properties.GP = "PAN_PRD"
          } 
          if(alianzas_estados[indexWinner].PAN_PRI_PRD == "1" && feature.properties.PAN_PRI_PRD > max){
            max = feature.properties.PAN_PRI_PRD
            // max = feature.properties.PAN + feature.properties.PRI + feature.properties.PRD
            feature.properties.GP = "PAN_PRI_PRD"
          }
          if(alianzas_estados[indexWinner].PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR == "1" && feature.properties.PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR > max){
            max = feature.properties.PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR
            // max = feature.properties.PAN + feature.properties.PRI + feature.properties.PRD + feature.properties.PARTIDO_CONCIENCIA_POPULAR
            feature.properties.GP = "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR"
          }
          if(alianzas_estados[indexWinner].PAN_PRI_PRD_PRS_HUMANISTA == "1" && feature.properties.PAN_PRI_PRD_PRS_HUMANISTA > max){
            max = feature.properties.PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR
            // max = feature.properties.PAN + feature.properties.PRI + feature.properties.PRD + feature.properties.PARTIDO_CONCIENCIA_POPULAR
            feature.properties.GP = "PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR"
          }
          if(alianzas_estados[indexWinner].PRI == "1" && feature.properties.PRI > max){
            max = feature.properties.PRI
            feature.properties.GP = "PRI"
          } 
          if(alianzas_estados[indexWinner].PRI_PAN_PRD_PAC == "1" && feature.properties.PRI_PAN_PRD_PAC > max){
            max = feature.properties.PRI_PAN_PRD_PAC
            // max = feature.properties.PRI + feature.properties.PAN + feature.properties.PRD + feature.properties.PAC
            feature.properties.GP = "PRI_PAN_PRD_PAC"
          }
          if(alianzas_estados[indexWinner].PRI_PRD == "1" && feature.properties.PRI_PRD > max){
            max = feature.properties.PRI_PRD
            // max = feature.properties.PRI + feature.properties.PRD 
            feature.properties.GP = "PRI_PRD"
          }
          if(alianzas_estados[indexWinner].PRD == "1" && feature.properties.PRD > max){
            max = feature.properties.PRD
            feature.properties.GP = "PRD"
          } 
          if(alianzas_estados[indexWinner].PVEM == "1" && feature.properties.PVEM > max){
            max = feature.properties.PVEM
            feature.properties.GP = "PVEM"
          } 
          if(alianzas_estados[indexWinner].PVEM_PT == "1" && feature.properties.PVEM_PT > max){
            max = feature.properties.PVEM_PT
            // max =  feature.properties.PVEM + feature.properties.PT
            feature.properties.GP = "PVEM_PT"
          }
          if(alianzas_estados[indexWinner].PT == "1" && feature.properties.PT > max){
            max = feature.properties.PT
            feature.properties.GP = "PT"
          }
          if(alianzas_estados[indexWinner].MC == "1" && feature.properties.MC > max){
            max = feature.properties.MC
            feature.properties.GP = "MC"
          }
          if(alianzas_estados[indexWinner].PANAL == "1" && feature.properties.PANAL > max){
            max = feature.properties.PANAL
            feature.properties.GP = "PANAL"
          }
          if(alianzas_estados[indexWinner].MORENA == "1" && feature.properties.MORENA > max){
            max = feature.properties.MORENA
            feature.properties.GP = "MORENA"
          } 
          if(alianzas_estados[indexWinner].MORENA_PANAL == "1" && feature.properties.MORENA_PANAL > max){
            max = feature.properties.MORENA_PANAL
            // max =  feature.properties.MORENA + feature.properties.PANAL
            feature.properties.GP = "MORENA_PANAL"
          }
          if(alianzas_estados[indexWinner].MORENA_PARTIDO_SINALOENSE == "1" && feature.properties.MORENA_PARTIDO_SINALOENSE > max){
            max = feature.properties.MORENA_PARTIDO_SINALOENSE
            // max =  feature.properties.MORENA + feature.properties.PARTIDO_SINALOENSE
            feature.properties.GP = "MORENA_PARTIDO_SINALOENSE"
          }
          if(alianzas_estados[indexWinner].MORENA_PT_PANAL == "1" && feature.properties.MORENA_PT_PANAL > max){
            max = feature.properties.MORENA_PT_PANAL
            // max =  feature.properties.MORENA + feature.properties.PT + feature.properties.PANAL
            feature.properties.GP = "MORENA_PT_PANAL"
          }
          if(alianzas_estados[indexWinner].MORENA_PT_PVEM == "1" && feature.properties.MORENA_PT_PVEM > max){
            max = feature.properties.MORENA_PT_PVEM
            // max =  feature.properties.MORENA + feature.properties.PT + feature.properties.PVEM
            feature.properties.GP = "MORENA_PT_PVEM"
          }
          if(alianzas_estados[indexWinner].MORENA_PT_PVEM_PANAL == "1" && feature.properties.MORENA_PT_PVEM_PANAL > max){
            max = feature.properties.MORENA_PT_PVEM_PANAL
            // max =  feature.properties.MORENA + feature.properties.PT + feature.properties.PVEM + feature.properties.PANAL
            feature.properties.GP = "MORENA_PT_PVEM_PANAL"
          }
          if(alianzas_estados[indexWinner].MORENA_PT_PVEM_PANAL_PES == "1" && feature.properties.MORENA_PT_PVEM_PANAL_PES > max){
            max = feature.properties.MORENA_PT_PVEM_PANAL_PES
            // max =  feature.properties.MORENA + feature.properties.PT + feature.properties.PVEM + feature.properties.PANAL + feature.properties.PES
            feature.properties.GP = "MORENA_PT_PVEM_PANAL_PES"
          } 
          if(alianzas_estados[indexWinner].PT_MORENA == "1" && feature.properties.PT_MORENA > max){
            max = feature.properties.PT_MORENA
            // max =  feature.properties.PT + feature.properties.MORENA
            feature.properties.GP = "PT_MORENA"
          } 
          if((alianzas_estados[indexWinner].PES == "1" && feature.properties.PES > max)){
            max = feature.properties.PES
            feature.properties.GP = "PES"
          } 
          if((alianzas_estados[indexWinner].RSP == "1" && feature.properties.RSP > max)){
            max = feature.properties.RSP
            feature.properties.GP = "RSP"
          }
          if((alianzas_estados[indexWinner].PARTIDO_BAJA_CALIFORNIA == "1" && feature.properties.PARTIDO_BAJA_CALIFORNIA > max)){
            max = feature.properties.PARTIDO_BAJA_CALIFORNIA
            feature.properties.GP = "PARTIDO_BAJA_CALIFORNIA"
          }
          if((alianzas_estados[indexWinner].BCS_COHERENTE == "1" && feature.properties.BCS_COHERENTE > max)){
            max = feature.properties.BCS_COHERENTE
            feature.properties.GP = "BCS_COHERENTE"
          }
          if((alianzas_estados[indexWinner].FUERZA_SOCIAL_POR_MEXICO == "1" && feature.properties.FUERZA_SOCIAL_POR_MEXICO > max)){
            max = feature.properties.FUERZA_SOCIAL_POR_MEXICO
            feature.properties.GP = "FUERZA_SOCIAL_POR_MEXICO"
          }
          if((alianzas_estados[indexWinner].LEVANTATE_POR_NAYARIT == "1" && feature.properties.LEVANTATE_POR_NAYARIT > max)){
            max = feature.properties.LEVANTATE_POR_NAYARIT
            feature.properties.GP = "LEVANTATE_POR_NAYARIT"
          }
          if(alianzas_estados[indexWinner].VIVA_NAYARIT == "1" && feature.properties.VIVA_NAYARIT > max){
            max = feature.properties.VIVA_NAYARIT
            feature.properties.GP = "VIVA_NAYARIT"
          }
          if((alianzas_estados[indexWinner].CI1 == "1" && feature.properties.CI1 > max)){
            max = feature.properties.CI1
            feature.properties.GP = "CI1"
          }
          if((alianzas_estados[indexWinner].IMPACTO_SOCIAL_SI == "1" && feature.properties.IMPACTO_SOCIAL_SI > max)){
            max = feature.properties.IMPACTO_SOCIAL_SI
            feature.properties.GP = "IMPACTO_SOCIAL_SI"
          }
          if((alianzas_estados[indexWinner].PAZ == "1" && feature.properties.PAZ > max)){
            max = feature.properties.PAZ
            feature.properties.GP = "PAZ"
          }
          if((alianzas_estados[indexWinner].PARTIDO_DEL_PUEBLO == "1" && feature.properties.PARTIDO_DEL_PUEBLO > max)){
            max = feature.properties.PARTIDO_DEL_PUEBLO
            feature.properties.GP = "PARTIDO_DEL_PUEBLO"
          }
        }

        max = 0
      })
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
                    feature.properties.PANAL = Number(prefData['PANAL']);
                    feature.properties.MORENA = Number(prefData['MORENA']);
                    feature.properties.PES = Number(prefData['PES']);
                    feature.properties.FXM = Number(prefData['FXM']);
                    feature.properties.RSP = Number(prefData['RSP']);
                    feature.properties.PAN_PRD = Number(prefData['PAN_PRD']);
                    feature.properties.PT_MORENA = Number(prefData['PT_MORENA']);
                    feature.properties.PRI_PRD = Number(prefData['PRI_PRD']);
                    feature.properties.MORENA_PT_PVEM = Number(prefData['MORENA_PT_PVEM']);
                    feature.properties.PAN_PRI_PRD = Number(prefData['PAN_PRI_PRD']);
                    feature.properties.PARTIDO_BAJA_CALIFORNIA = Number(prefData['PARTIDO_BAJA_CALIFORNIA']);
                    feature.properties.PAN_PRI_PRD_PRS_HUMANISTA = Number(prefData['PAN_PRI_PRD_PRS_HUMANISTA']);
                    feature.properties.BCS_COHERENTE = Number(prefData['BCS_COHERENTE']);
                    feature.properties.MORENA_PT_PVEM_PANAL = Number(prefData['MORENA_PT_PVEM_PANAL']);
                    feature.properties.MORENA_PT_PANAL = Number(prefData['MORENA_PT_PANAL']);
                    feature.properties.FUERZA_SOCIAL_POR_MEXICO = Number(prefData['FUERZA_SOCIAL_POR_MEXICO']);
                    feature.properties.MORENA_PANAL = Number(prefData['MORENA_PANAL']);
                    feature.properties.LEVANTATE_POR_NAYARIT = Number(prefData['LEVANTATE_POR_NAYARIT']);
                    feature.properties.VIVA_NAYARIT = Number(prefData['VIVA_NAYARIT']);
                    feature.properties.CI1 = Number(prefData['CI1']);
                    feature.properties.PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR = Number(prefData['PAN_PRI_PRD_PARTIDO_CONCIENCIA_POPULAR']);
                    feature.properties.PVEM_PT = Number(prefData['PVEM_PT']);
                    feature.properties.MORENA_PARTIDO_SINALOENSE = Number(prefData['MORENA_PARTIDO_SINALOENSE']);
                    feature.properties.MORENA_PT_PVEM_PANAL_PES = Number(prefData['MORENA_PT_PVEM_PANAL_PES']);
                    feature.properties.PRI_PAN_PRD_PAC = Number(prefData['PRI_PAN_PRD_PAC']);
                    feature.properties.IMPACTO_SOCIAL_SI = Number(prefData['IMPACTO_SOCIAL_SI']);
                    feature.properties.PAZ = Number(prefData['PAZ']);
                    feature.properties.PARTIDO_DEL_PUEBLO = Number(prefData['PARTIDO_DEL_PUEBLO']);
                    
                    feature.properties.VT = Number(prefData['VT']);
                    feature.properties.VG = Number(prefData['VG']);
                    feature.properties.GP = String(prefData['GP']);
                }
            });
            return feature;
        });
        alianzas_estados = data[2];
        //console.log(alianzas_estados);
        //console.log(data[2]);
        mergedGeoJSON = data[0];
        console.log(mergedGeoJSON);
        getWinner();

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
              
               {stateData.length != 0 && (
                 <div className = {classes.pieContainer}>
                    <h2 className={classes.chartTitle}><strong>Distribución de Votos {selectedStateN}</strong></h2>
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

  chartTitle:{
    fontSize: '20px',
    textAlign: 'center'
  },

  pieContainer: {
    height: '600px',
    width: '600px',
    margin: 'auto',
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