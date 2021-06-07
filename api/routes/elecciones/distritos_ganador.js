var express = require('express');
var router = express.Router();

let formData=(x,y)=>{
    return{x,y}
}

router.post('/data/distritos-ganador',function(req,res){
    var fs = require('fs');
    var d3 = require('d3');
    var distritos;


    fs.readFile("data/elecciones/distritos_ganador.csv","utf8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }

        distritos = d3.csvParse(data);
        var myjson = [];
        //console.log(indicators);

        for (var i = 0; i < distritos.length; i++){
            var id = distritos[i].ID_DISTRITO;
            var edo = distritos[i].ID_ESTADO;
            var dto = distritos[i].DISTRITO;
            var ganador = distritos[i].GANADOR;	
            var ganador2018 = distritos[i].GANADOR_2018;
            var ganador2021 = distritos[i].GANADOR_2021;

            delete distritos[i].ID_DISTRITO;
            delete distritos[i].ID_ESTADO;
            delete distritos[i].GANADOR;	
            delete distritos[i].GANADOR_2018;
            delete distritos[i].GANADOR_2021

            var data = {
                "id": parseFloat(id),
                "edo": parseFloat(edo),
                "dto": parseFloat(dto),
                "ganador": ganador,
                "ganador2018": ganador2018,
                "ganador2021": ganador2021,
            }

            myjson.push(data);
        }

        res.status(200).json(myjson);
    });


    return res;

});


module.exports = router;