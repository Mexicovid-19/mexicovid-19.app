mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxmaWd1ZXJvYXJpdmVyYSIsImEiOiJjazh2eGZnNjcwcW9hM2ZudmRyaTRnMXRpIn0.Iz4sCjOM8HSDtLxnFCjSjg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-68.13734351262877, 45.137451890638886],
zoom: 5
});

var loadFiles = [
    d3.json("Mexico_Estados.geojson")
];
Promise.all(loadFiles).then(function(data) {
    console.log(data);
    /*
    data[0].features = data[0].features.map(feature => {
        data[1].forEach(estadosData => {
            if (feature.properties.ABREV === estadosData['ESTADO']) {
                // Lee con este loop iterando por todas las columnas para pegar todas en el mapa
                var i;
                for (i = 1; i < lt; i++) {
                    feature.properties[nameCol[i]] = Number(estadosData[nameCol[i]]);
                }
            }
        });
        return feature;
    });
    var margedGeoJSON = data[0];
    total_positivos = d3.sum(data[1], function(d) {
        return +d[today_p];
    });
    total_sospechosos = d3.sum(data[1], function(d) {
        return +d[today_s];
    });
    array_positivos = data[1].map(function(d) {
        return +d[today_p];
    });
    array_sospechosos = data[1].map(function(d) {
        return +d[today_s];
    });
    array_positivos.sort(function(a, b) {
        return a - b;
    });
    array_sospechosos.sort(function(a, b) { // Ordena los datos para sacar cuantiles.
        return a - b;
    });
    // Seis categorías y partición por cuantiles
    var quantile_pos = [array_positivos[5], array_positivos[10], array_positivos[15], array_positivos[20], array_positivos[25], array_positivos[29]]
    for (i = 0; i < label_holder.length; i++) {
        if(i == 0){
            document.getElementById(label_holder[i]).innerHTML = quantile_pos[i] + '-'
        }else if (i >0 && i < (label_holder.length - 1)) {
            document.getElementById(label_holder[i]).innerHTML = quantile_pos[i];
        } else {
            document.getElementById(label_holder[i]).innerHTML = quantile_pos[i] + '+'
        }
    }
    document.getElementById('tot_lab_pos').innerText = numberWithCommas(total_positivos);
    document.getElementById('tot_lab_sos').innerText = numberWithCommas(total_sospechosos);
    thresholdsNum = [array_positivos[5], array_positivos[10], array_positivos[15], array_positivos[20], array_positivos[25], array_positivos[29]];
    var thresholdsColor = ['#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#0c2c84'];
    stepsList = thresholdsNum.map((num, i) => {
        return [num, thresholdsColor[i]];
    });
    var selectedValue, selectedABREV;*/
    /*map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
        'fill-color': '#088',
        'fill-opacity': 0.8
        }
        }); */
});