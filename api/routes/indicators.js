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
                state:val,
                n_f1_aislamiento: val,
                n_f2_aislamiento: val,
                n_f1b_aislamiento: val,
                n_f1_seguridad: val,
                n_f2_seguridad: val,
                n_f2_transparenciaNL911: val,
                n_f1_transparenciaNL911: val,
                n_f1_salud: val,
                n_f2_salud: val,
                n_f3_salud: val,
                n_f4_salud: val,
                n_f1_economia: val,
                n_f2_economia: val,
                n_f3_economia: val,
            })
        });
        for(indicadores of indicators){
            let ind = indicadores.indicadores;
            /*
            for (i in array.data) {
                let point = formData(ind, indicadores[array.data[i].id]);
                array.data[i].data.push(point)
            }
            */	
        }
        res.status(200).json(array.data);
        return res;
    });
});

module.exports = router;