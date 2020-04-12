var map;

function init() {
    initMap();
}

let initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lng:-100.367777123, lat:25.6972046766651},
      });
}

let openFile = (event) => {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        parser = new DOMParser();
        KML2JSON(parser.parseFromString(text,"text/xml"));
    };
    reader.readAsText(input.files[0]);
};

let KML2JSON = (xmlDoc) => {
    arr = xmlDoc.querySelectorAll("Placemark");

    arrCP = [];
    arr.forEach(placemark => {
        var cp = placemark.querySelector("SimpleData").innerHTML;
        var coordsStr = placemark.querySelector("coordinates").innerHTML;
        var coords = coordsStr.split(" ");

        latLngArr = [];
        coords.forEach(latLng => {
            latLng = latLng.split(",");
            latLngArr.push({lat: Number(latLng[1]), lng: Number(latLng[0])});
        });

        cpJSON = {
            "number": cp,
            "points": latLngArr
        }
        arrCP.push(cpJSON);
    });
    json = { "nuevo leon" : arrCP};
    console.log(json);

    loadCPinMap(json);
}

let loadCPinMap = (json) => {
    let polygons = json["nuevo leon"];
    
    //let poly = polygons[0].points;
    polygons.forEach(poly => {
        console.log(poly.points);
        var cp = new google.maps.Polygon({
            paths: poly.points,
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: '#FF0000',
            fillOpacity: Math.random()
        });
        cp.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: poly.number
        });

        google.maps.event.addListener(cp,"mouseover",function(){
            infowindow.open(map, cp);
            this.setOptions({fillColor: "#00FF00"});
        }); 

        google.maps.event.addListener(cp,"mouseout",function(){
            infowindow.close();
            this.setOptions({fillColor: "#FF0000"});
        }); 

        
    })
    
    
    
}