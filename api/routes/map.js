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

router.post('/data', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');

	fs.readFile("data/contagios.csv", "utf8", function(err, data){
		console.log("Getting daily data");

		if(err) {
			throw err;
		}
		
		var d = d3.csvParse(data);
		res.status(200).json(d);
	});
	return res;
	
});

module.exports = router;