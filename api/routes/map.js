var express = require('express');
var router = express.Router();

router.post('/states', function(req, res) {
	var fs = require('fs');
	
	fs.readFile("data/Mexico_Estados.geojson", "utf8", function(err, data){
		if(err) {
			throw err;
		}
		
		res.status(200).json(JSON.parse(data));
	});
	
	return res;
	
});

router.post('/data/confirmados', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var positivos;
	var myjson = [];

	fs.readFile("data/positivos.csv", "utf8", function(err, data){
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

router.post('/data/sospechosos', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var sospechosos;
	var myjson = [];
	
	fs.readFile("data/sospechosos.csv", "utf8", function(err, data){
		console.log("Getting suspicious data");

		if(err) {
			throw err;
		}
		
		sospechosos = d3.csvParse(data.trim());
		
		for(var i = 0; i < sospechosos.length; i++) {
			var id = sospechosos[i]["ID"];
			var estado = sospechosos[i].ESTADO;
			
			delete sospechosos[i]["ID"];
			delete sospechosos[i].ESTADO;
			var data = {
				"id": id,
				"estado": estado,
				"sospechosos": sospechosos[i]
			}
			
			myjson.push(data);
		}
		
		res.status(200).json(myjson);
	});
	return res;
	
});

module.exports = router;