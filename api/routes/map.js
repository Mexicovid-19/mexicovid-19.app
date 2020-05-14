var express = require('express');
var router = express.Router();

router.post('/states', function(req, res) {
	var fs = require('fs');
	
	fs.readFile("data/home/Mexico_Estados.geojson", "utf8", function(err, data){
		if(err) {
			res.statusMessage = "states file didn't load."
			res.status(404).end();
		} else {
			res.status(200).json(JSON.parse(data));
		}
	});
	
	return res;
	
});

router.get('/municipality/find/CVE_ENT', function(req, res) {
	let {cve_ent} = req.query;
	var fs = require('fs');

	if(!cve_ent) {
		res.statusMessage = "CVE_ENT is missing in the query"
		return res.status(406).end();
	}

	fs.readFile("data/home/municipios_geometry.json", "utf8", function(err, data){
		if(err) {
			res.statusMessage = "file didn't load."
			res.status(404).end();
		} else {
			let jsonData = JSON.parse(data);
			let features = jsonData.features;
			
			const results = features.filter(feature => feature.properties.CVE_ENT == cve_ent);

			geojson = {"type":"FeatureCollection","features": results};
			res.status(200).json(geojson);
		}
	});
	
	return res;
});

router.post('/data/confirmados', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var positivos;
	var myjson = [];

	fs.readFile("data/home/positivos.csv", "utf8", function(err, data){
		console.log("Getting positive data");

		if(err) {
			throw err;
		}

		positivos = d3.csvParse(data);
			
		for(var i = 0; i < positivos.length; i++) {
			var id = positivos[i].ID;
			var estado = positivos[i].ESTADO;
	
			delete positivos[i].ID;
			delete positivos[i].ESTADO;
	
			var data = {
				"id": id,
				"estado": estado,
				"confirmados": positivos[i]
			}

			myjson.push(data);
		}
		
		res.status(200).json(myjson);
	});
	return res;
	
});

router.post('/data/decesos', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var decesos;
	var myjson = [];
	
	fs.readFile("data/home/decesos.csv", "utf8", function(err, data){
		console.log("Getting suspicious data");

		if(err) {
			throw err;
		}
		
		decesos = d3.csvParse(data.trim());
		
		for(var i = 0; i < decesos.length; i++) {
			var id = decesos[i]["ID"];
			var estado = decesos[i].ESTADO;
			
			delete decesos[i]["ID"];
			delete decesos[i].ESTADO;
			var data = {
				"id": id,
				"estado": estado,
				"decesos": decesos[i]
			}
			
			myjson.push(data);
		}
		
		res.status(200).json(myjson);
	});
	return res;
	
});


router.get('/municipios_data', function(req, res) {
	var fs = require('fs');

	fs.readFile("data/region/municipios_poblacion_entmun.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = "file didn't load."
			res.status(404).end();
		} else {
			let jsonData = JSON.parse(data);
			
			res.status(200).json(jsonData);
		}
	});
	
	return res;
});

module.exports = router;