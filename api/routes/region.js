var express = require('express');
var router = express.Router();

let formData = (x, y) => {
	return {x, y}
}

router.post('/data/states', function(req, res) {
	var fs = require('fs');
	var d3 = require('d3');
	var edos_date;

	fs.readFile("data/region/edos_date.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = `File doesn't exist or couldn't open`;
			return res.status(409).end();
		}

		edos_date = d3.csvParse(data);
		let values = Object.values(edos_date.columns.slice(1));
		let array =  {
			'data': []
		}

		values.forEach(val => {
			array.data.push({
				id: val,
				data: []
			})
		});

		for(day of edos_date) {
			let date = day.date;
			
			for(i in array.data) {
				let point = formData(date, day[array.data[i].id]);
				array.data[i].data.push(point)
			}			
		}

		res.status(200).json(array.data);
	});


	return res;
	
});

module.exports = router;