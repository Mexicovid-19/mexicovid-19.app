import React from 'react';
import mapboxgl from 'mapbox-gl';

const useMap = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_API_KEY;
  
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

      callStatesGEOJSON();
  }, []);

  let callStatesGEOJSON = ()  => {
    const response = fetch(`${process.env.REACT_APP_API_URL}/map/states`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    })
    .then(res => res.text())
    .then(res => console.log(res));
  }

  return {
      mapRef,
      state
  }
}

export default useMap;