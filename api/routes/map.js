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

module.exports = router;