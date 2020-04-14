import React from 'react';
import mapboxgl from 'mapbox-gl';

const useMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZHJlZGciLCJhIjoiY2s4eHc2cGpiMWJsbzNscXEzcTE5dzhtMiJ9.MPadSAVs6Jr1gOs7hfYVpQ';
  const mapRef = React.useRef(null);
  const [state, setState] = React.useState({
    lng: 5,
    lat: 34,
    zoom: 1.5
  });

  React.useEffect(() => {
    const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mildredg/ck8xwex5j19ei1iqkha7x2sko',
        center: [state.lng, state.lat],
        zoom : state.zoom
      });

      
    map.on('move', () => {
        const { lng, lat } = map.getCenter();
    
        setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        });
      });

    callAPI();
  }, []);

  let callAPI = ()  => {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => console.log(res));
  }

  return {
      mapRef,
      state
  }
}

export default useMap;