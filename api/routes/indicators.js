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
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }

        indicators = d3.csvParse(data);
        var myjson = [];
        //console.log(indicators);

        for (var i = 0; i < indicators.length; i++){
            var id = indicators[i].ID;
            var estado = indicators[i].ESTADO;
            var aislamiento1 = indicators[i].N_F1_AISLAMIENTO;	
            var n_f2_aislamiento = indicators[i].N_F2_AISLAMIENTO;
            var n_f1b_aislamiento = indicators[i].N_F1B_AISLAMIENTO;
            var n_f1_seguridad = indicators[i].N_F1_SEGURIDAD;
            var n_f2_seguridad = indicators[i].N_F2_SEGURIDAD;
            var n_f2_transparencianl911 = indicators[i].N_F2_TRANSPARENCIANL911;
            var n_f1_transparencianl911 = indicators[i].N_F1_TRANSPARENCIANL911;
            var n_f1_salud = indicators[i].N_F1_SALUD;
            var n_f2_salud = indicators[i].N_F2_SALUD;
            var n_f3_salud = indicators[i].N_F3_SALUD;
            var n_f4_salud = indicators[i].N_F4_SALUD;
            var n_f1_economia = indicators[i].N_F1_ECONOMIA;
            var n_f2_economia = indicators[i].N_F2_ECONOMIA;
            var n_f3_economia = indicators[i].N_F3_ECONOMIA;

            delete indicators[i].ID;
            delete indicators[i].ESTADO;
            delete indicators[i].N_F1_AISLAMIENTO;
            delete indicators[i].N_F2_AISLAMIENTO;
            delete indicators[i].N_F1B_AISLAMIENTO;
            delete indicators[i].N_F1_SEGURIDAD;
            delete indicators[i].N_F2_SEGURIDAD;
            delete indicators[i].N_F2_TRANSPARENCIANL911;
            delete indicators[i].N_F1_TRANSPARENCIANL911;
            delete indicators[i].N_F1_SALUD;
            delete indicators[i].N_F2_SALUD;
            delete indicators[i].N_F3_SALUD;
            delete indicators[i].N_F4_SALUD;
            delete indicators[i].N_F1_ECONOMIA;
            delete indicators[i].N_F2_ECONOMIA;
            delete indicators[i].N_F3_ECONOMIA;

            var data = {
                "id": id,
                "estado": estado,
                "N_F1_AISLAMIENTO": parseFloat(aislamiento1),
                "N_F2_AISLAMIENTO": parseFloat(n_f2_aislamiento),
                "N_F1B_AISLAMIENTO": parseFloat(n_f1b_aislamiento),
                "N_F1_SEGURIDAD": parseFloat(n_f1_seguridad),
                "N_F2_SEGURIDAD": parseFloat(n_f2_seguridad),
                "N_F2_TRANSPARENCIANL911": parseFloat(n_f2_transparencianl911),
                "N_F1_TRANSPARENCIANL911":parseFloat(n_f1_transparencianl911),
                "N_F1_SALUD": parseFloat(n_f1_salud),
                "N_F2_SALUD": parseFloat(n_f2_salud),
                "N_F3_SALUD": parseFloat(n_f3_salud),
                "N_F4_SALUD": parseFloat(n_f4_salud),
                "N_F1_ECONOMIA": parseFloat(n_f1_economia),
                "N_F2_ECONOMIA": parseFloat(n_f2_economia),
                "N_F3_ECONOMIA": parseFloat(n_f3_economia),

            }
            myjson.push(data);
        }

        res.status(200).json(myjson);
    });


    return res;

});


module.exports = router;