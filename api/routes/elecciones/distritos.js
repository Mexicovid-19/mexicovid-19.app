var express = require('express');
var router = express.Router();

let formData=(x,y)=>{
    return{x,y}
}

router.post('/data/distritos',function(req,res){
    var fs = require('fs');
    var d3 = require('d3');
    var distritos;


    fs.readFile("data/elecciones/distritos.csv","utf8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }

        distritos = d3.csvParse(data);
        var myjson = [];
        //console.log(indicators);

        for (var i = 0; i < distritos.length; i++){
            var id = distritos[i].distrito_id;
            var dto = distritos[i].dto;
            var edo = distritos[i].edo;	
            var pan = distritos[i].PAN;
            var pri = distritos[i].PRI;
            var prd = distritos[i].PRD;
            var pvem = distritos[i].PVEM;
            var pt = distritos[i].PT;
            var mov_cid = distritos[i].MOVIMIENTO_CIUDADANO;
            var rsp = distritos[i].RSP;
            var morena = distritos[i].MORENA;
            var pes = distritos[i].PES;
            var fm = distritos[i].FM;
            var pan_pri_prd = distritos[i].PAN_PRI_PRD;
            var pan_prd = distritos[i].PAN_PRD;
            var pri_prd = distritos[i].PRI_PRD;
            var pt_morena_pvem = distritos[i].PT_MORENA_PVEM
            var pt_morena = distritos[i].PT_MORENA;
            var pt_pvem = distritos[i].PT_PVEM;
            var pvem_morena = distritos[i].PVEM_MORENA;
            var can_ind_01 = distritos[i].CAND_IND_01;
            var can_ind_02 = distritos[i].CAND_IND_02;
            var cnr = distritos[i].CNR;
            var vn = distritos[i].VN;
            var total = distritos[i].TOTAL_VOTOS_CALCULADOS;
            var lista_nominal = distritos[i].LISTA_NOMINAL_CASILLA;
            var urbana = distritos[i].URBANA;
            var rural = distritos[i].RURAL;
            var vpm = distritos[i].VPM;
            var jhh = distritos[i].JHH;

            delete distritos[i].distrito_id;
            delete distritos[i].dto;
            delete distritos[i].edo;	
            delete distritos[i].PAN;
            delete distritos[i].PRI;
            delete distritos[i].PRD;
            delete distritos[i].PVEM;
            delete distritos[i].PT;
            delete distritos[i].MOVIMIENTO_CIUDADANO;
            delete distritos[i].RSP;
            delete distritos[i].MORENA;
            delete distritos[i].PES;
            delete distritos[i].FM;
            delete distritos[i].PAN_PRI_PRD;
            delete distritos[i].PAN_PRD;
            delete distritos[i].PRI_PRD;
            delete distritos[i].PT_MORENA_PVEM
            delete distritos[i].PT_MORENA;
            delete distritos[i].PT_PVEM;
            delete distritos[i].PVEM_MORENA;
            delete distritos[i].CAND_IND_01;
            delete distritos[i].CAND_IND_02;
            delete distritos[i].CNR;
            delete distritos[i].VN;
            delete distritos[i].TOTAL_VOTOS_CALCULADOS;
            delete distritos[i].LISTA_NOMINAL_CASILLA;
            delete distritos[i].URBANA;
            delete distritos[i].RURAL;
            delete distritos[i].VPM;
            delete distritos[i].JHH;

            var data = {
                "id": id,
                "dto": parseFloat(dto),
                "edo": parseFloat(edo),
                "PAN": parseFloat(pan),
                "PRI": parseFloat(pri),
                "PRD": parseFloat(prd),
                "PVEM": parseFloat(pvem),
                "PT": parseFloat(pt),
                "MOVIMIENTO_CIUDADANO": parseFloat(mov_cid),
                "RSP": parseFloat(rsp),
                "MORENA": parseFloat(morena),
                "PES": parseFloat(pes),
                "FM": parseFloat(fm),
                "PAN_PRI_PRD": parseFloat(pan_pri_prd),
                "PAN_PRD": parseFloat(pan_prd),
                "PRI_PRD": parseFloat(pri_prd),
                "PT_MORENA_PVEM": parseFloat(pt_morena_pvem),
                "PT_MORENA": parseFloat(pt_morena),
                "PT_PVEM": parseFloat(pt_pvem),
                "PVEM_MORENA": parseFloat(pvem_morena),
                "CAND_IND_01": parseFloat(can_ind_01),
                "CAND_IND_02": parseFloat(can_ind_02),
                "CNR": parseFloat(cnr),
                "VN": parseFloat(vn),
                "TOTAL_VOTOS_CALCULADOS": parseFloat(total),
                "LISTA_NOMINAL_CASILLA": parseFloat(lista_nominal),
                "URBANA": parseFloat(urbana),
                "RURAL": parseFloat(rural),
                "VPM": parseFloat(vpm),
                "JHH": parseFloat(jhh),
            }

            myjson.push(data);
        }

        res.status(200).json(myjson);
    });


    return res;

});


module.exports = router;