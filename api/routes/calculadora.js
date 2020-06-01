var express = require('express');
var router = express.Router();

let formData=(x,y)=>{
    return{x,y}
}

let amortizacion =()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var amortizacion;
    fs.readFile("data/calculator/Amortizacion.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        amortizacion = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < amortizacion.length; i++){
            
            var id = amortizacion[i].ID;
            var mxn1 = amortizacion[i].MXN1;
            var mxn2 = amortizacion[i].MXN2;
            var mxn3 = amortizacion[i].MXN3;	
            var usd1 = amortizacion[i].USD1;	
            var usd2 = amortizacion[i].USD2;
            var usd3 = amortizacion[i].USD3;


            delete indicators[i].ID;
            delete amortizacion[i].ID;
            delete amortizacion[i].MXN1;
            delete amortizacion[i].MXN2;
            delete amortizacion[i].MXN3;	
            delete amortizacion[i].USD1;	
            delete amortizacion[i].USD2;
            delete amortizacion[i].USD3;

            var data = {
                "ID": parseFloat(id),
                "MXN1": parseFloat(mxn1),
                "MXN2": parseFloat(mxn2),
                "MXN3": parseFloat(mxn3),	
                "USD1": parseFloat(usd1),	
                "USD2": parseFloat(usd2),
                "USD3": parseFloat(usd3),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
    
}

let deficit =()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var deficit;
    fs.readFile("data/calculator/deficit.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        deficit = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < deficit.length; i++){
            
            var ano = deficit[i].ANO
            var d_it = deficit[i].D_IT	
            var d_oil = deficit[i].D_OIL	
            var fgp = deficit[i].FGP	
            var d_e = deficit[i].D_E	
            var d_pen = deficit[i].D_PEN	
            var d_cfo = deficit[i].D_CFO
            
            delete deficit[i].ANO
            delete deficit[i].D_IT	
            delete deficit[i].D_OIL	
            delete deficit[i].FGP	
            delete deficit[i].D_E	
            delete deficit[i].D_PEN	
            delete deficit[i].D_CFO

            var data = {
                "ANO": parseFloat(ano),	
                "D_IT": parseFloat(d_it),	
                "D_OIL": parseFloat(d_oil),	
                "FGP": parseFloat(fgp),	
                "D_E": parseFloat(d_e),	
                "D_PEN": parseFloat(d_pen),	
                "D_CFO": parseFloat(d_cfo),

            }
            myjson.push(data);
        }

        return json(myjson);
    });
    
}

let demandaAgregada =()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var demandaAgregada;
    fs.readFile("data/calculator/demandaAgregada.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        demandaAgregada = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < demandaAgregada.length; i++){
            
            var ano = demandaAgregada[i].ANO
            var pib = demandaAgregada[i].PIB	
            var c = demandaAgregada[i].C	
            var g = demandaAgregada[i].G	
            var ii = demandaAgregada[i].I	
            var inv = demandaAgregada[i].INV	
            var nx = demandaAgregada[i].NX
            var e = demandaAgregada[i].E
            
            delete demandaAgregada[i].ANO
            delete demandaAgregada[i].PIB	
            delete demandaAgregada[i].C	
            delete demandaAgregada[i].G	
            delete demandaAgregada[i].I	
            delete demandaAgregada[i].INV	
            delete demandaAgregada[i].NX
            delete demandaAgregada[i].E

            var data = {
                "ANO":parseFloat(ano),
                "PIB":parseFloat(pib),	
                "C":parseFloat(c),	
                "G":parseFloat(g),	
                "I":parseFloat(ii),	
                "INV":parseFloat(inv),	
                "NX":parseFloat(nx),
                "E":parseFloat(e),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
}

let finanzasPublicas=()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var finanzasPublicas;
    fs.readFile("data/calculator/FinanzasPublicas.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        finanzasPublicas = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < finanzasPublicas.length; i++){
            
            
            var ano =finanzasPublicas[i].ANO	
            var rsp = finanzasPublicas[i].RFSP	
            var rfsp_p = finanzasPublicas[i].RFSP_P	
            var pcpib_r = finanzasPublicas[i].PCPIB_R	
            var pcpib_r_oil = finanzasPublicas[i].PCPIB_R_OIL	
            var pcpib_r_pemex = finanzasPublicas[i].PCPIB_R_PEMEX	
            var pcpib_r_tax = finanzasPublicas[i].PCPIB_R_TAX	
            var pcpib_r_pnf = finanzasPublicas[i].PCPIB_R_PNF	
            var pcpib_r_pf = finanzasPublicas[i].PCPIB_R_PF	
            var pcpib_e = finanzasPublicas[i].PCPIB_E
            var pcpib_e_central = finanzasPublicas[i].PCPIB_E_CENTRAL	
            var pcpib_e_r28 = finanzasPublicas[i].PCPIB_E_R28	
            var pcpib_e_nf = finanzasPublicas[i].PCPIB_E_NF	
            var pcpib_e_f = finanzasPublicas[i].PCPIB_E_F	
            var pcpib_cf = finanzasPublicas[i].PCPIB_CF	
            var pcpib_cf_c = finanzasPublicas[i].PCPIB_CF_C	
            var pcpib_cf_o = finanzasPublicas[i].PCPIB_CF_O

            delete finanzasPublicas[i].ANO	
            delete finanzasPublicas[i].RFSP	
            delete finanzasPublicas[i].RFSP_P	
            delete finanzasPublicas[i].PCPIB_R	
            delete finanzasPublicas[i].PCPIB_R_OIL	
            delete finanzasPublicas[i].PCPIB_R_PEMEX	
            delete finanzasPublicas[i].PCPIB_R_TAX	
            delete finanzasPublicas[i].PCPIB_R_PNF	
            delete finanzasPublicas[i].PCPIB_R_PF	
            delete finanzasPublicas[i].PCPIB_E	
            delete finanzasPublicas[i].PCPIB_E_CENTRAL	
            delete finanzasPublicas[i].PCPIB_E_R28	
            delete finanzasPublicas[i].PCPIB_E_NF	
            delete finanzasPublicas[i].PCPIB_E_F	
            delete finanzasPublicas[i].PCPIB_CF	
            delete finanzasPublicas[i].PCPIB_CF_C	
            delete finanzasPublicas[i].PCPIB_CF_O

            var data = {
                "ANO":parseFloat(ano),
                "RFSP":parseFloat(rsp),
                "RFSP_P":parseFloat(rfsp_p),
                "PCPIB_R":parseFloat(pcpib_r),
                "PCPIB_R_OIL":parseFloat(pcpib_r_oil),
                "PCPIB_R_PEMEX":parseFloat(pcpib_r_pemex),
                "PCPIB_R_TAX":parseFloat(pcpib_r_tax),
                "PCPIB_R_PNF":parseFloat(pcpib_r_pnf),
                "PCPIB_R_PF":parseFloat(pcpib_r_pf),
                "PCPIB_E":parseFloat(pcpib_e),
                "PCPIB_E_CENTRAL":parseFloat(pcpib_e_central),
                "PCPIB_E_R28":parseFloat(pcpib_e_r28),
                "PCPIB_E_NF":parseFloat(pcpib_e_nf),
                "PCPIB_E_F":parseFloat(pcpib_e_f),
                "PCPIB_CF":parseFloat(pcpib_cf),
                "PCPIB_CF_C":parseFloat(pcpib_cf_c),
                "PCPIB_CF_O":parseFloat(pcpib_cf_o),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
}

let parametrosDeudaMxn=()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var ParametrosDeudaMxn;
    fs.readFile("data/calculator/ParametrosDeudaMxn.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        ParametrosDeudaMxn = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < ParametrosDeudaMxn.length; i++){
            
            
            var ano =ParametrosDeudaMxn[i].ANO	
            var debt_mxn = ParametrosDeudaMxn[i].DEBT_MXN	
            var amort_debt_mxn = ParametrosDeudaMxn[i].AMORT_DEBT_MXN	
            var cf_mxn = ParametrosDeudaMxn[i].CF_MXN	

            delete ParametrosDeudaMxn[i].ANO	
            delete ParametrosDeudaMxn[i].DEBT_MXN	
            delete ParametrosDeudaMxn[i].AMORT_DEBT_MXN	
            delete ParametrosDeudaMxn[i].CF_MXN	

            var data = {
                "ANO":parseFloat(ano),
                "DEBT_MXN":parseFloat(debt_mxn),
                "AMORT_DEBT_MXN":parseFloat(amort_debt_mxn),
                "CF_MXN":parseFloat(cf_mxn),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
}

let pibNominal=()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var PIBNominal;
    fs.readFile("data/calculator/PIBNominal.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        PIBNominal = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < PIBNominal.length; i++){
            
            var ano =PIBNominal[i].ANO	
            var inpc = PIBNominal[i].INPC	

            delete PIBNominal[i].ANO	
            delete PIBNominal[i].INPC

            var data = {
                "ANO":parseFloat(ano),
                "INPC":parseFloat(inpc),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
}

let tasaInteres=()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var TasaInteres;
    fs.readFile("data/calculator/TasaInteres.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        TasaInteres = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < TasaInteres.length; i++){
            
            var ano =TasaInteres[i].ANO	
            var inpc = TasaInteres[i].INPC	

            delete TasaInteres[i].ANO	
            delete TasaInteres[i].INPC	

            var data = {
                "ANO":parseFloat(ano),
                "INPC":parseFloat(inpc),
            }
            myjson.push(data);
        }

        return json(myjson);
    });
}

let tipoCambio=()=>{
    var fs = require('fs');
    var d3 = require('d3');
    var TipoCambio;
    fs.readFile("data/calculator/TipoCambio.csv","uft8",function(err,data){
        if (err) {
            res.statusMessage = `File doesn't exist or couldn't open`;
            return res.status(409).end();
        }
        TipoCambio = d3.csvParse(data);
        var myjson = [];
        for (var i = 0; i < TipoCambio.length; i++){
            
            var ano =TipoCambio[i].ANO	
            var fx = TipoCambio[i].FX	

            delete TipoCambio[i].ANO	
            delete TipoCambio[i].FX

            var data = {
                "ANO":parseFloat(ano),
                "FX":parseFloat(fx),
            }
            myjson.push(data);
        }
        return json(myjson);
    });
}



router.post('/data/calculadora',function(req,res){
    var fs = require('fs');
    var d3 = require('d3');

    

});


module.exports = router;