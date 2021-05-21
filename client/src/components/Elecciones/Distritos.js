import React, { useState, useEffect, useRef } from 'react'

/* Material UI */
import { withStyles } from '@material-ui/core/styles';

/* Mapbox */
import mnDistricts from "./data/prueba.geojson";
import distritos_geojson from "./data/distritos.geojson";
import mapboxgl from 'mapbox-gl';

const Distritos = ({ classes }) => {
    const isMobile = window.innerWidth < 1000;

    /* Mapbox */
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const mapContainer = useRef(null);

    /* const [long, setLong] = useState(-99.28);
    const [lat, setLat] = useState(19.39);
    const [zoom, setZoom] = useState(2); */

    const [long, setLong] = useState(-94.503809);
    const [lat, setLat] = useState(46.443226);
    const [zoom, setZoom] = useState(4.5);

    const [hoveredDistrict, _setHoveredDistrict] = useState(null);
    const hoveredDistrictRef = useRef(hoveredDistrict);

    const setHoveredDistrict = data => {
        hoveredDistrictRef.current = data;
        _setHoveredDistrict(data);
    };

    const setupGeoJson = () => {
        console.log(distritos_geojson)
    }

    useEffect(() => {
        setupGeoJson()
        let map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10",
            center: [long, lat],
            zoom: zoom
        });


        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());

        map.once("load", function () {

            map.addSource('district-source', {
                'type': 'geojson',
                'data': distritos_geojson
            });
            //console.log(mnDistricts)

            /* map.addLayer({
                'id': 'district-layer',
                'type': 'fill',
                'source': 'district-source',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'CD116FP'],
                        '01',
                        '#5AA5D7',
                        '02',
                        '#02735E',
                        '03',
                        '#00E0EF',
                        '04',
                        '#84D0D9',
                        '05',
                        '#202359',
                        '06',
                        '#CE7529',
                        '07',
                        '#00AE6C',
                        '08',
                        '#0056A3',
                         '#ffffff'
                    ],
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        .8,
                        0.5
                    ]
                }
            }); */

            map.addLayer({
                'id': 'district-layer',
                'type': 'fill',
                'source': 'district-source',
                'layout': {},
                'paint': {
                    'fill-color': '#5AA5D7',
                    'fill-outline-color': '#FFF',
                    'fill-opacity': [
                        'case',
                        ['boolean', ['feature-state', 'hover'], false],
                        .8,
                        0.5
                    ]
                }
            });

            map.on('mousemove', 'district-layer', function (e) {
                if (e.features.length > 0) {
                    if (hoveredDistrictRef.current && hoveredDistrictRef.current > -1) {

                        map.setFeatureState(
                            { source: 'district-source', id: hoveredDistrictRef.current },
                            { hover: false }
                        );
                    }

                    //let _hoveredDistrict = e.features[0].properties.ID;
                    let _hoveredDistrict = e.features[0].id;
                    console.log(e.features)
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
                setHoveredDistrict(null);
            });

            map.on('move', () => {
                const { lng, lat } = map.getCenter();

                setLong(lng.toFixed(4));
                setLat(lat.toFixed(4));
                setZoom(map.getZoom().toFixed(2));
            });

        });

    }, []);

    return (
        <div className="district-map-wrapper">

            <div className="info">
                Current hovered district: <strong>{hoveredDistrict ? hoveredDistrict : ""}</strong>
            </div>
            <div id="districtDetailMap" className={classes.map}>
                <div style={{ height: "100%" }} ref={mapContainer}></div>
            </div>
        </div>
    );
}

const styles = () => ({
  /* Desktop */
  map: {
    height: '800px',
    width: '800px',
    margin: 'auto'
  },

  /* Mobile */
  [`@media (max-width: ${1000}px)`]: {
    
  }
  
});

export default withStyles(styles)(Distritos);