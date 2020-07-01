class PIB{

    static TC_PIB = {
        2010: 5.10/100,
        2011: 3.66/100,
        2012: 3.64/100, 
        2013: 1.35/100,
        2014: 2.8/100,
        2015: 3.29/100,
        2016: 2.91/100, 
        2017: 2.12/100,
        2018: 2.14/100, 
        2019: -0.15/100,
        2020: -10/100,
        2021: 2.2/100, 
        2022: 2.0/100,
        2023: 2.0/100,
        2024: 2.0/100,
        2025: 2.0/100
    }
    static INPC = {
        2010: 0.8947993093/1.266521519,
        2011: 0.9252885186/1.266521519,
        2012: 0.9633318351/1.266521519,
        2013: 1/1.266521519,
        2014: 1.040186172/1.266521519,
        2015: 1.068485906/1.266521519,
        2016: 1.098635456/1.266521519,
        2017: 1.165009032/1.266521519,
        2018: 1.222086913/1.266521519,
        2019: 1.266521519/1.266521519,
        2020: 1.303250643/1.266521519,
        2021: 1.348864416/1.266521519,
        2022: 1.39607467/1.266521519,
        2023: 1.444937284/1.266521519,
        2024: 1.495510088/1.266521519,
        2025: 1.547852942/1.266521519,
    }
    static story = [
        new PIB({
            "anio": 2010,
            "consumo": 10051695.98,
            "gasto": 1853233.22,
            "inversion": 3162931.18,
            "inventarios": 172381.69,
            "exportacionesNetas": -265964.09,
            "discrepanciasEstadisticas": -26483.29
        }),
        new PIB({
            "anio": 2011,
            "consumo": 10389467.27,
            "gasto": 1909485.47,
            "inversion": 3411148.99,
            "inventarios": 139543.48,
            "exportacionesNetas": -189105.06,
            "discrepanciasEstadisticas": -165206.54
        }),
        new PIB({
            "anio": 2012,
            "consumo": 10632503.92,
            "gasto": 1973706.13,
            "inversion": 3579230.67,
            "inventarios": 161078.57,
            "exportacionesNetas": -147063.97,
            "discrepanciasEstadisticas": -139731.67
        }),
        new PIB({
            "anio": 2013,
            "consumo": 10819250.94,
            "gasto": 1984414.92,
            "inversion": 3459303.53,
            "inventarios": 201986.56,
            "exportacionesNetas": -187768.86,
            "discrepanciasEstadisticas": 0
        }),
        new PIB({
            "anio": 2014,
            "consumo": 11046456.56,
            "gasto": 2036270.46,
            "inversion": 3565379.28,
            "inventarios": 159802.68,
            "exportacionesNetas": -144670.4,
            "discrepanciasEstadisticas": 70416.18
        }),
        new PIB({
            "anio": 2015,
            "consumo": 11346412.27,
            "gasto": 2074996.99,
            "inversion": 3743942.54,
            "inventarios": 142059.1,
            "exportacionesNetas": -17214.02,
            "discrepanciasEstadisticas": -6340.96
        }),
        new PIB({
            "anio": 2016,
            "consumo": 11771565.27,
            "gasto": 2128908.71,
            "inversion": 3783030.08,
            "inventarios": 155583.39,
            "exportacionesNetas": 25759.54,
            "discrepanciasEstadisticas": -77936.4
        }),
        new PIB({
            "anio": 2017,
            "consumo": 12148393.22,
            "gasto": 2143070.11,
            "inversion": 3723306.9,
            "inventarios": 151533.34,
            "exportacionesNetas": -107871.8,
            "discrepanciasEstadisticas": 105220.72
        }),
        new PIB({
            "anio": 2018,
            "consumo": 12428538.75,
            "gasto": 2207570.25,
            "inversion": 3757136.85,
            "inventarios": 128236.74,
            "exportacionesNetas": -110282.15,
            "discrepanciasEstadisticas": 140419.59
        }),
        new PIB({
            "anio": 2019,
            "consumo": 12502876.5,
            "gasto": 2174999.06,
            "inversion": 3572212.47,
            "inventarios": 97777.99,
            "exportacionesNetas": 41559.77,
            "discrepanciasEstadisticas": 135182.63
        })
    ]
    static getStory(){
        return PIB.story.map(l=>({
            anio: l.anio, 
            pib: l.pib, 
            tc: l.tc, 
            tc_mxn: l.tc_mxn,
            pibNominal: l.pibNominal,
            inpc: l.inpc-1
        }))
    }

    /*
    PCPIB_RFS[t]=PCPIB_R[t]-PCPIB_E[t]-PCPIB_CF[t]
    NEW_DEBT[t]=PCPIB_RFS[t]*PIBN[t]
    NEW_DEBT_MXN[t]=NEW_DEBT[t]*MXNSHARE
    NEW_DEBT_USD[t]=NEW_DEBT[t]*USDSHARE
    DEBT_MXN[t]=DEBT_MXN[t-1]+NEW_DEBT_MXN[t]-AMORT_DEBT_MXN[t]
    DEBT_USD[t]=DEBT_USD[t-1]+NEW_DEBT_USD[t]-AMORT_DEBT_USD[t]
    DEBT[t]=DEBT_MXN[t]+DEBT_USD[t]*FX[t]
    CF_MXN[t]=RateMXN[t]*DEBT_MXN[t]
    CF_USD[t]=RateUSD[t]*DEBT_USD[t]
    CF[t]=CF_MXN[t]+CF_USD[t]
    PC_DEBT[t]=DEBT[t]/PIBN[t]
    */

    constructor(options){
        this.anio = options.anio;
        this.gasto = options.gasto;
        this.consumo = options.consumo;
        this.inversion = options.inversion;
        this.inventarios = options.inventarios;
        this.exportacionesNetas = options.exportacionesNetas;
        this.discrepanciasEstadisticas = options.discrepanciasEstadisticas;

        this.pib = this.gasto+this.consumo+this.inversion+this.inventarios+this.exportacionesNetas+this.discrepanciasEstadisticas;
        this.porc_consumo = (this.consumo)/( this.consumo + this.inventarios + this.inversion + this.discrepanciasEstadisticas );
        this.porc_inversion = (this.inversion)/( this.consumo + this.inventarios + this.inversion + this.discrepanciasEstadisticas );
        this.porc_inventarios = (this.inventarios)/( this.consumo + this.inventarios + this.inversion + this.discrepanciasEstadisticas );
        this.porc_discrepanciasEstadisticas = (this.discrepanciasEstadisticas)/( this.consumo + this.inventarios + this.inversion + this.discrepanciasEstadisticas );
        this.tc_dabase = options.tc_dabase;
        this.estimuloFiscal = options.estimuloFiscal || false;
        this.inpc = options.inpc || PIB.INPC[this.anio];
        this.pibNominal = this.pib*this.inpc;
        
        
        this.tc = PIB.TC_PIB[this.anio];

        this.tc_mxn = PIB.TC_PIB[this.anio]*this.pib;   
    }

    /**
     * Regresa el PIB del año siguiente según indicadores
     * @returns {PIB} 
     * @param {float} tc_pib Tasa de cambio del PIB (estimado segun CitiBanamex u otro)
     * @param {float} tc_g Tasa de cambio de gastos (estimado según presupuesto de gastos de SHCP)
     */
    obtenerAnioSiguienteSegunTC(tc_pib, tc_g){
        let nextPIB = this.pib*(1+tc_pib);
        let nextGasto = this.gasto*(1+tc_g);
        let tc_da = ((nextPIB-nextGasto)/(this.pib-this.gasto) -1);
        return new PIB({
            anio: this.anio+1,
            consumo: this.consumo*(1+tc_da),
            gasto: nextGasto,
            inversion: this.inversion*(1+tc_da),
            inventarios: this.inventarios*(1+tc_da),
            exportacionesNetas: this.exportacionesNetas*(1+tc_da),
            discrepanciasEstadisticas: this.discrepanciasEstadisticas*(1+tc_da),
            tc_dabase: tc_da
        })
    }

    /**
     * Regresa el PIB según datos de estímulos fiscales nominales
     * @returns {PIB} Pib con estímulo fiscal
     * @param {float} efn estimulo físcal nominal del año actual
     * @param {float} inpc indice nacional de precios al consumidor del año actual
     * @param {float} mult multiplicador del año actual
     */
    obtenerConEstimuloFiscal(efn, inpc, mult){
        let ef = efn/PIB.INPC[this.anio];
        return new PIB({
            anio: this.anio,
            gasto: this.gasto+ef,
            consumo: this.consumo + ef * (mult-1)*this.porc_consumo,
            inversion: this.inversion + ef*(mult-1)*this.porc_inversion,
            inventarios: this.inventarios + ef*(mult-1)*this.porc_inventarios,
            discrepanciasEstadisticas: this.discrepanciasEstadisticas + ef *(mult-1)*this.porc_discrepanciasEstadisticas,
            exportacionesNetas: this.exportacionesNetas,
            estimuloFiscal: true
        })
    }

    /**
     * Regresa el valor del pib en un año según datos preestablecidos de crecimiento
     * @returns {float} 
     * @param {int} anio Año del que se quiere obtener el PIB según datos preestablecidos de crecimiento
     * @param {PIB} anio2020 Objeto de PIB sobre el cual tomar los datos
     */
    static obtenerPIBsinComponentes(anio, anio2020 = CalculatorData.obtenerAnioSiguienteSegunTC(-10/100, 0.9/100)){
        if(anio>2025) return 0;
        let result = anio2020.pib
        for(let i=anio; i<2025; i++){
            result*=(1+PIB.TC_PIB[i])
        }
        return result;
    }
    /**
     * Regresa el valor nominal del pib según datos preestablecidos de crecimiento e INPC
     * @returns {float}
     * @param {int} anio AÑo del que se quiere obtener el PIB según datos preestalecidos de crecimiento e índice de precios al consumidor
     */
    static obtenerPIBNsinComponentes(anio, anio2020){
        return this.obtenerPIBsinComponentes(anio, anio2020)*PIB.INPC[anio];
    }

    // PIB.obtenerPrediccion(año2002, tasadecambio)

    static obtenerPrediccion(base=PIB.story[ PIB.story.length-1 ], primerTC = PIB.TC_PIB[base.anio]){
        let story = [...PIB.getStory()];
        let accum = base.pib
        let tc;

        for(let i=base.anio; i<=2025; i++){

            if(i>=2021){
                tc = tc+PIB.TC_PIB[i];
            }
            else{
                tc = i==base.anio?primerTC:PIB.TC_PIB[i]
            }

            //tc = i==base.anio?primerTC:PIB.TC_PIB[i]

            story.push({
                anio: i,
                tc: tc,
                pib: accum,
                tc_mxn: accum*PIB.TC_PIB[i],
                pibNominal: PIB.INPC[i]*accum,
                inpc: PIB.INPC[i]-1
            })
            //accum*=(1+tc)
            accum*=(1 + Number(PIB.TC_PIB[i]))
        }
        console.log(story)
        return story;
    }


    /**
     * Regresa FinanzasPublicas según parámetros, para el año con el respectivo PIB
     * @returns {FinanzasPublicas} Instancia
     * @param {object} {options}
     */
    obtenerFinanzasPublicas(options){
        return new FinanzasPublicas({
            ...options,
            anio: this.anio, 
            pib: this.pib, 
            inpc: this.inpc,
            pibNominal: this.pibNominal,
            estimuloFiscal: this.estimuloFiscal
        })
    }

}

class FinanzasPublicas{

    static rfs = {

    }

    static defecit = {
        d_it: {
            2020: -0.07,
            2021: 0,
            2022: 0,
            2023: 0,
            2024: 0,
            2025: 0
        },
        d_oil: {
            2020: -0.48,
            2021: -0.25,
            2022: -0.10,
            2023: -0.10,
            2024: -0.10,
            2025: -0.10
        }, 
        fgp: {
            2020: 0.20,
            2021: 0.20,
            2022: 0.20,
            2023: 0.20,
            2024: 0.20,
            2025: 0.20
        },
        d_e: {
            2020: -0.01,
            2021: 0,
            2022: 0,
            2023: 0,
            2024: 0,
            2025: 0
        },
        d_pen: {
            2020: 0,
            2021: 0,
            2022: 0,
            2023: 0,
            2024: 0, 
            2025: 0
        }, 
        d_cfo: {
            2020: 0, 
            2021: 0,
            2022: 0,
            2023: 0, 
            2024: 0,
            2025: 0
        }
    }
    constructor(options){
        this.pib = options.pib;
        this.inpc = options.inpc;
        this.anio = options.anio;
        this.pibNominal = options.pibNominal;
        
        this.estimuloFiscal = options.estimuloFiscal;
        this.gastoPrimario = {...options.gastoPrimario, total: Object.values(options.gastoPrimario).reduce((a, b)=>a+b, 0)};
        this.ingresos = {...options.ingresos, total: Object.values(options.ingresos).reduce((a, b)=>a+b, 0)};
        this.costoFinanciero = {...options.costoFinanciero, total: Object.values(options.costoFinanciero).reduce((a, b)=>a+b, 0)};

        this.rfs = this.ingresos.total - this.gastoPrimario.total - this.costoFinanciero.total;
        this.rfsp_p = this.ingresos.total - this.gastoPrimario.total;

    }

    obtenerEnPesosReales(){
        let result = {
            ingresos: {...this.ingresos},
            gastoPrimario: {...this.gastoPrimario},
            costoFinanciero: {...this.costoFinanciero}
        };
        Object.keys(result).forEach(l=>{
            Object.keys(result[l]).forEach(key=>{
                result[l][key]*=this.pib;
            });
        });
        return result;
    }

    obtenerEnPesosNominales(){
        let result = {...this.obtenerEnPesosReales()};
        Object.keys(result).forEach(l=>{
            Object.keys(result[l]).forEach(key=>{
                result[l][key]*=this.inpc;
            });
        });
        return result;
    }



}
/**
 * Se refiere al año actual (2019)
 */
const CalculatorData = new PIB({
    anio: 2019,
    consumo: 12502876.50,
    gasto: 2174999.06,
    inversion: 3572212.47,
    inventarios: 97778.99,
    exportacionesNetas: 41560.77,
    discrepanciasEstadisticas: 135183.63
});




// let anios = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
// let anios2 = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
// //Porcentajes
// let _datosHistoricosPromedio = {};
// let datosHistoricosPromedio = [];
// datosHistoricos.forEach(q=>{
//     let year = anios.find(l=>q.ANO.includes(l))
//     if(_datosHistoricosPromedio[year] === undefined){
//         _datosHistoricosPromedio[year] = {PIB: 0} 
//     }
//         _datosHistoricosPromedio[year].PIB+=0.25*Number(q.PIB);
// })
// Object.keys(_datosHistoricosPromedio).forEach(anio=>{
//     let obj = {
//         ANO: anio, 
//         ..._datosHistoricosPromedio[anio]
//     }
//     datosHistoricosPromedio.push(obj)
// })
// console.log(datosHistoricosPromedio)


// //Porcentajes
// let _datosHistoricosPromedioPer = {};
// let datosHistoricosPromedioPer = [];
// datosTCPPIB.forEach(q=>{
//     let year = anios.find(l=>q.ANO.includes(l))
//     if(_datosHistoricosPromedioPer[year] === undefined){
//         _datosHistoricosPromedioPer[year] = {PORCENTAJE: 0} 
//     }
//         _datosHistoricosPromedioPer[year].PORCENTAJE+=Number(q.PORCENTAJE);
// })
// Object.keys(_datosHistoricosPromedioPer).forEach(anio=>{
//     let obj = {
//         ANO: anio, 
//         ..._datosHistoricosPromedioPer[anio]
//     }
//     datosHistoricosPromedioPer.push(obj)
// })
// console.log(datosHistoricosPromedioPer)

// //MXN
// let _datosHistoricosPromedioMXN = {};
// let datosHistoricosPromedioMXN = [];
// datosHistoricosMXN.forEach(q=>{
//     let year = anios.find(l=>q.ANO.includes(l))
//     if(_datosHistoricosPromedioMXN[year] === undefined){
//         _datosHistoricosPromedioMXN[year] = {PIB: 0} 
//     }
//         _datosHistoricosPromedioMXN[year].PIB+=0.25*Number(q.PIB);
// })
// Object.keys(_datosHistoricosPromedioMXN).forEach(anio=>{
//     let obj = {
//         ANO: anio, 
//         PIB:_datosHistoricosPromedioMXN[anio].PIB,
//         PorcentajePIB:_datosHistoricosPromedio[anio].PIB,
//         TasaCrecimiento:_datosHistoricosPromedioPer[anio].PORCENTAJE,
//         CrecimientoMXN:_datosHistoricosPromedioMXN[anio].PIB*(_datosHistoricosPromedioPer[anio].PORCENTAJE/100)
//     }
//     datosHistoricosPromedioMXN.push(obj)
// })
// console.log(datosHistoricosPromedioMXN)



// export {PIB, datosHistoricos, datosHistoricosPromedio,datosHistoricosPromedioMXN};
export {PIB}
export default CalculatorData;