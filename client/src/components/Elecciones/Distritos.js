import React, { useState, useEffect, useRef, useContext } from 'react'
/* axios */
import axios from 'axios';

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

/* Data */
import distritos_csv from './data/distritos.csv'
import distritos_geojson from "./data/distritos.geojson"


import { STATES } from '../../constants/states'

const Distritos = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;

    /* context */
    //const { distritosData, distritosGanadoresData } = useContext(DistritosContext)

    /* Mapbox */
    //mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY
    const mapContainer = useRef(null);
    const [long, setLong] = useState(-99.28);
    const [lat, setLat] = useState(19.39);
    const [zoom, setZoom] = useState(3.8);


    const [districtData, setDistrictData] = useState([])
    const [district, setDistrict] = useState({edo: 19, dto: 10});
    const [selectedDistrict, setSelectedDistrict] = useState(1910)
    const [hoveredDistrict, _setHoveredDistrict] = useState(null);
    const hoveredDistrictRef = useRef(hoveredDistrict);

    const curules = [
        {
            "id": "PAN",
            "label": "PAN",
            "value": 20,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "MORENA",
            "label": "MORENA",
            "value": 43,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "PRI",
            "label": "PRI",
            "value": 65,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "PES",
            "label": "PES",
            "value": 20,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "PRD",
            "label": "PRD",
            "value": 20,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "PVEM",
            "label": "PVEM",
            "value": 12,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "PT",
            "label": "PT",
            "value": 20,
            "color": "hsl(210, 90%, 34%)",
        },
        {
            "id": "RSP",
            "label": "RSP",
            "value": 22,
            "color": "hsl(210, 90%, 34%)",
        },
    ]

    var mergedGeoJSON;

    const setHoveredDistrict = data => {
        hoveredDistrictRef.current = data;
        _setHoveredDistrict(data);
    };


    var loadFiles = [
        d3.json(distritos_geojson),
        d3.csv(distritos_csv)
        /* d3.json("data/distritos_fed.geojson"),
        d3.csv("data/distritos.csv"), */
    ]; 

    const setUpData = (id) => {
      let _districtData = []
      mergedGeoJSON.features.map(feature =>{
        if(feature.properties.distrito_id === id){
          _districtData.push({
            "id": "PAN",
            "label": "PAN",
            "value": feature.properties.PAN,
            "color": "hsl(210, 90%, 34%)"
          })
          _districtData.push({
            "id": "MORENA",
            "label": "MORENA",
            "value": feature.properties.MORENA,
            "color": "hsl(8, 76%, 43%)"
          })
          _districtData.push({
            "id": "PES",
            "label": "PES",
            "value": feature.properties.PES,
            "color": "hsl(288, 45%, 34%)"
          })
          _districtData.push({
            "id": "PRD",
            "label": "PRD",
            "value": feature.properties.PRD,
            "color": "hsl(48, 100%, 50%)"
          })
          _districtData.push({
            "id": "PRI",
            "label": "PRI",
            "value": feature.properties.PRI,
            "color": "hsl(135, 37%, 48%)"
          })
          _districtData.push({
            "id": "PT",
            "label": "PT",
            "value": feature.properties.PT,
            "color": "hsl(3, 81%, 47%)"
          })
          _districtData.push({
            "id": "PVEM",
            "label": "PVEM",
            "value": feature.properties.PVEM,
            "color": "hsl(86, 50%, 58%)"
          })
          _districtData.push({
            "id": "RSP",
            "label": "RSP",
            "value": feature.properties.RSP,
            "color": "rgb(0,0,255)"
          })

        }
      })
      //console.log(_stateData)
      setDistrictData(_districtData)
    }


    useEffect(() => {
        //setUpData(selectedDistrict)
        //console.log(indicatorsData)
        //console.log(datas)
        
        //console.log(distritosGanadoresData)
       /*  var loadFiles = [
            d3.json("./data/distritos.geojson"),
            d3.csv("./data/distritos.csv")
        ]; */

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
            
            console.log("data[1]: ", data[0]);

            data[0].features = data[0].features.map((feature, i) => {
                var prefData = data[1][i]
                feature.id = Number(prefData['distrito_id']);
                feature.properties.distrito_id = Number(prefData['distrito_id']);
                feature.properties.dto = Number(prefData['dto']);
                feature.properties.edo = Number(prefData['edo']);
                feature.properties.PAN = Number(prefData['PAN']);
                feature.properties.PRI = Number(prefData['PRI']);
                feature.properties.PRD = Number(prefData['PRD']);
                feature.properties.PVEM = Number(prefData['PVEM']);
                feature.properties.PT = Number(prefData['PT']);
                feature.properties.MOVIMIENTO_CIUDADANO = Number(prefData['MOVIMIENTO_CIUDADANO']);
                feature.properties.RSP = Number(prefData['RSP']);
                feature.properties.MORENA = Number(prefData['MORENA']);
                feature.properties.PES = Number(prefData['PES']);
                feature.properties.FM = Number(prefData['FM']);
                feature.properties.PAN_PRI_PRD = Number(prefData['PAN_PRI_PRD']);
                feature.properties.PAN_PRD = Number(prefData['PAN_PRD']);
                feature.properties.PAN_PRI = Number(prefData['PAN_PRI']);
                feature.properties.PRI_PRD = Number(prefData['PRI_PRD']);
                feature.properties.PT_MORENA_PVEM = Number(prefData['PT_MORENA_PVEM']);
                feature.properties.PVEM_MORENA = Number(prefData['PVEM_MORENA']);
                feature.properties.CAND_IND_01 = Number(prefData['CAND_IND_01']);
                feature.properties.CAND_IND_02 = Number(prefData['CAND_IND_02']);
                feature.properties.CNR = Number(prefData['CNR']);
                feature.properties.VN = Number(prefData['VN']);
                feature.properties.TOTAL_VOTOS_CALCULADOS = Number(prefData['TOTAL_VOTOS_CALCULADOS']);
                feature.properties.LISTA_NOMINAL_CASILLA = Number(prefData['LISTA_NOMINAL_CASILLA']);
                feature.properties.URBANA = Number(prefData['URBANA']);
                feature.properties.RURAL = Number(prefData['RURAL']);
                feature.properties.VPM = Number(prefData['VPM']);
                feature.properties.JHH = Number(prefData['JHH']);
                feature.properties.GANADOR = String(prefData['GANADOR']);
                feature.properties.GANADOR_2018 = String(prefData['GANADOR_2018']);
                feature.properties.GANADOR_2021 = String(prefData['GANADOR_2021']);
                
                return feature;
            });

            //setup geosjon
            mergedGeoJSON = data[0];
            
            setUpData(selectedDistrict)

            //map.scrollZoom.disable();

            map.once("load", function () {

                map.addSource('district-source', {
                    'type': 'geojson',
                    'data': mergedGeoJSON
                });
                //console.log(mnDistricts)

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
                            '#FF0018',
                            'PRD',
                            '#FFCC00',
                            'PVEM',
                            '#A2CD40',
                            'PT',
                            '#FFED00',
                            'MOVIMIENTO_CIUDADANO',
                            '#FF7A00',
                            'MORENA',
                            '#960016',
                            'PES',
                            '#7C2690',
                            'FM',
                            '#FF53A1',
                            'RSP',
                            '#313233',
                            'PT_MORENA_PES',
                            '#B2242B',
                            'PAN_PRD_MC',
                            '#0055BF',
                            'CAND_IND_01',
                            '#8FA7A9',
                            'CAND_IND_02',
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
                        
                        var description = `<div><h3 class="popupTitle"><strong>${STATES[e.features[0].properties.ENTIDAD-1].title || '-'}</strong></h3><h3 class="popupTitle"><strong>Distrito: ${e.features[0].properties.distrito_id || '-'}</strong></h3><div class="popupLogosContainer"><div><img class="popupImg" src='./img/elecciones/partidos/${e.features[0].properties.GANADOR_2018}.png'/><p class="popupYear">2018</p></div><div><img class="popupImg"  src='./img/elecciones/partidos/${e.features[0].properties.GANADOR_2018}.png'/><p class="popupYear">2021</p></div></div></div>`
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
                    setDistrict({dto: e.features[0].properties.dto, edo: e.features[0].properties.edo})
                })

            });
        })
        

    }, []);

    

    return (
        <div>
            <div className={classes.itemsContainer}>
                {/* Map */}
                <div className="district-map-wrapper">
                    <div id="districtDetailMap" className={classes.map}>
                        <div style={{ height: "100%" }} ref={mapContainer}></div>
                    </div>
                </div>
                {/* pie chart */}
                <div className={classes.outerChartContainer}>
                    <h2 className={classes.subtitle}>Estado: {STATES[district.edo-1].title}</h2>
                    <h2 className={classes.subtitle}>Distrito: {district.dto}</h2>
                    {districtData.length !== 0 && (
                        <div className={classes.chartContainer}>
                            <DistritosChart data={districtData}/>
                        </div>
                        
                    )}
                </div>
            </div>
            {/* half pie  chart */}
            <div className={classes.outerChartContainer}>
                <h2 className={classes.subtitle}>Estimación de la distribución de la legislatura LXV</h2>
                {districtData.length !== 0 && (
                    <div className={classes.chartContainer}>
                        <CurulesChart data={curules}/>
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
    //height: '800px',
    //width: '800px',
    height: 'calc(100vh - 200px)',
    //width: 'calc(100vw - 600px)',
    width: '60vw',
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
    width: '40vw',
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

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    
  }
  
});

export default withStyles(styles)(Distritos); 