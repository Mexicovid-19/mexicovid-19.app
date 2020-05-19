var express = require('express');
var router = express.Router();

let formData=(x,y)=>{
    return{x,y}
}

router.post('/data/indicators',function(req,res){
    var fs = require('fs');
    var d3 = require('d3');
    var indicators;


    fs.readFile("data/indicators/indicadores.csv","utf8",function(err,data){
        if(err){
            res.statusMessage = 'File not found or couldnt be opened';
            return res.status(409).end;
        }
        indicators = d3.csvParse(data);
        let values = Object.values(indicators.columns.slice(1));
        let array = {
            'data':[]
        }
        values.forEach(val=>{
            array.data.push({
                id:val,
                data:[]
            })
        });
        for(indicadores of indicators){
            let ind = indicadores.indicadores;

            for (i in array.data) {
                let point = formData(ind, indicadores[array.data[i].id]);
                array.data[i].data.push(point)
            }	
        }
        res.status(200).json(array.data);
        return res;
    });
});

module.exports = router;