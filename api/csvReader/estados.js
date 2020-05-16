var express = require('express');
var router = express.Router();
var estado = require('../controller/estado');

router.get('/estado', function(req, res) {
    var fs = require('fs');
    var d3 = require('d3');
	
	fs.readFile("data/home/estados.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = "file didn't load."
			res.status(404).end();
		} else {
			var d3 = require('d3');
            let states = d3.csvParse(data);
            
            states.forEach(state => {
                
                let _req = {
                    "body": state
                }
                console.log(_req);
                estado.create(_req,res);
            });
			
			res.status(200).json(states);
		}
	});
	
	return res;
});


module.exports = router;