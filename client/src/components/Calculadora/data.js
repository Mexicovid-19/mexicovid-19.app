class PIB{
    static TC_PIB = {
        2021: 2.2/100, 
        2022: 2.0/100,
        2023: 2.0/100,
        2024: 2.0/100,
        2025: 2.0/100
    }
    static INPC = {
        2019: 1266521519,
        2020: 1303250643,
        2021: 1348864416,
        2022: 139607467,
        2023: 1444937284,
        2024: 1495510088,
        2025: 1547852942,
    }
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
        this.inpc = options.inpc;
        this.pibNominal = this.pib*this.inpc;
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
        let tc_da = (nextPIB-nextGasto)/(this.pib-this.gasto) -1;
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
    static obtenerPIBNsinComponentes(anio){
        return this.obtenerPIBsinComponentes(anio)*PIB.INPC[anio];
    }

}

const CalculatorData = new PIB({
    anio: 2019,
    consumo: 12502876.50,
    gasto: 2174999.06,
    inversion: 3572212.47,
    inventarios: 97778.99,
    exportacionesNetas: 41560.77,
    discrepanciasEstadisticas: 135183.63
});

const datosHistoricos = [
        {
            ANO: "01/2010",
            PIB: 14,
            DA: 18,
            C: 9,
            G: 1,
            I: 3,
            INV: 228,
            XM: -244,
            X: 3,
            M: 4,
            E: -92
        },
        {
            ANO: "03/2010",
            PIB: 14,
            DA: 19,
            C: 9,
            G: 1,
            I: 3,
            INV: 198,
            XM: -265,
            X: 4,
            M: 4,
            E: 78
        },
        {
            ANO: "06/2010",
            PIB: 14,
            DA: 19,
            C: 10,
            G: 1,
            I: 3,
            INV: 84,
            XM: -355,
            X: 4,
            M: 4,
            E: 150
        },
        {
            ANO: "09/2010",
            PIB: 15,
            DA: 20,
            C: 10,
            G: 1,
            I: 3,
            INV: 178,
            XM: -198,
            X: 4,
            M: 4,
            E: -243
        },
        {
            ANO: "01/2011",
            PIB: 14,
            DA: 19,
            C: 9,
            G: 1,
            I: 3,
            INV: 227,
            XM: -58,
            X: 4,
            M: 4,
            E: -197
        },
        {
            ANO: "03/2011",
            PIB: 15,
            DA: 20,
            C: 10,
            G: 1,
            I: 3,
            INV: 166,
            XM: -147,
            X: 4,
            M: 4,
            E: -122
        },
        {
            ANO: "06/2011",
            PIB: 15,
            DA: 20,
            C: 10,
            G: 1,
            I: 3,
            INV: 54,
            XM: -364,
            X: 4,
            M: 5,
            E: -31
        },
        {
            ANO: "09/2011",
            PIB: 16,
            DA: 21,
            C: 10,
            G: 1,
            I: 3,
            INV: 109,
            XM: -186,
            X: 4,
            M: 5,
            E: -309
        },
        {
            ANO: "01/2012",
            PIB: 15,
            DA: 20,
            C: 10,
            G: 1,
            I: 3,
            INV: 233,
            XM: -79,
            X: 4,
            M: 4,
            E: -333
        },
        {
            ANO: "03/2012",
            PIB: 16,
            DA: 21,
            C: 10,
            G: 1,
            I: 3,
            INV: 216,
            XM: -28,
            X: 5,
            M: 5,
            E: -153
        },
        {
            ANO:"06/2012",
            PIB: 15,
            DA: 21,
            C: 10,
            G: 1,
            I: 3,
            INV: 46,
            XM: -248,
            X: 4,
            M: 5,
            E: -50
        },
        {
            ANO: "09/2012",
            PIB: 16,
            DA: 22,
            C: 11,
            G: 2,
            I: 3,
            INV: 148,
            XM: -231,
            X: 5,
            M: 5,
            E: -21
        },
        {
            ANO: "01/2013",
            PIB: 15,
            DA: 20,
            C: 10,
            G: 1,
            I: 3,
            INV: 144,
            XM: -170,
            X: 4,
            M: 4,
            E: -9
        },
        {
            ANO: "03/2013",
            PIB: 16,
            DA: 21,
            C: 10,
            G: 1,
            I: 3,
            INV: 310,
            XM: -241,
            X: 5,
            M: 5,
            E: 122
        },
        {
            ANO: "06/2013",
            PIB: 16,
            DA: 21,
            C: 10,
            G: 1,
            I: 3,
            INV: 196,
            XM: -271,
            X: 5,
            M: 5,
            E: 38
        },
        {
            ANO: "09/2013",
            PIB: 16,
            DA: 22,
            C: 11,
            G: 2,
            I: 3,
            INV: 156,
            XM: -67,
            X: 5,
            M: 5,
            E: -150
        },
        {
            ANO: "01/2014",
            PIB: 16,
            DA: 21,
            C: 10,
            G: 2,
            I: 3,
            INV: 184,
            XM: -172,
            X: 4,
            M: 5,
            E: 141
        },
        {
            ANO: "03/2014",
            PIB: 16,
            DA: 22,
            C: 10,
            G: 2,
            I: 3,
            INV: 134,
            XM: -135,
            X: 5,
            M: 5,
            E: 277
        },
        {
            ANO: "06/2014",
            PIB: 16,
            DA: 22,
            C: 11,
            G: 2,
            I: 3,
            INV: 106,
            XM: -238,
            X: 5,
            M: 5,
            E: 92
        },
        {
            ANO: "09/2014",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 214,
            XM: -32,
            X: 5,
            M: 5,
            E: -229
        },
        {
            ANO: "01/2015",
            PIB: 16,
            DA: 22,
            C: 10,
            G: 2,
            I: 3,
            INV: 293,
            XM: 23,
            X: 5,
            M: 5,
            E: -124
        },
        {
            ANO: "03/2015",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 159,
            XM: 53,
            X: 5,
            M: 5,
            E: 146
        },
        {
            ANO: "06/2015",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 23,
            XM: -179,
            X: 5,
            M: 6,
            E: 153
        },
        {
            ANO: "09/2015",
            PIB: 17,
            DA: 24,
            C: 11,
            G: 2,
            I: 3,
            INV: 91,
            XM: 33,
            X: 6,
            M: 6,
            E: -201
        },
        {
            ANO: "01/2016",
            PIB: 17,
            DA: 22,
            C: 11,
            G: 2,
            I: 3,
            INV: 287,
            XM: 48,
            X: 5,
            M: 5,
            E: -181
        },
        {
            ANO: "03/2016",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 191,
            XM: 17,
            X: 6,
            M: 6,
            E: 139
        },
        {
            ANO: "06/2016",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 54,
            XM: -91,
            X: 6,
            M: 6,
            E: -43
        },
        {
            ANO: "09/2016",
            PIB: 18,
            DA: 24,
            C: 12,
            G: 2,
            I: 3,
            INV: 88,
            XM: 128,
            X: 6,
            M: 6,
            E: -226
        },
        {
            ANO: "01/2017",
            PIB: 17,
            DA: 23,
            C: 11,
            G: 2,
            I: 3,
            INV: 284,
            XM: 141,
            X: 6,
            M: 6,
            E: -156
        },
        {
            ANO: "03/2017",
            PIB: 18,
            DA: 24,
            C: 11,
            G: 2,
            I: 3,
            INV: 171,
            XM: -21,
            X: 6,
            M: 6,
            E: 230
        },
        {
            ANO: "06/2017",
            PIB: 17,
            DA: 24,
            C: 12,
            G: 2,
            I: 3,
            INV: 59,
            XM: -459,
            X: 6,
            M: 6,
            E: 255
        },
        {
            ANO: "09/2017",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 90,
            XM: -92,
            X: 6,
            M: 6,
            E: 91
        },
        {
            ANO: "01/2018",
            PIB: 18,
            DA: 24,
            C: 12,
            G: 2,
            I: 3,
            INV: 227,
            XM: -72,
            X: 6,
            M: 6,
            E: -16
        },
        {
            ANO: "03/2018",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 111,
            XM: 106,
            X: 6,
            M: 6,
            E: 24
        },
        {
            ANO: "06/2018",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 66,
            XM: -315,
            X: 6,
            M: 7,
            E: 188
        },
        {
            ANO: "09/2018",
            PIB: 19,
            DA: 26,
            C: 12,
            G: 2,
            I: 3,
            INV: 106,
            XM: -160,
            X: 6,
            M: 7,
            E: 364
        },
        {
            ANO: "01/2019",
            PIB: 18,
            DA: 24,
            C: 12,
            G: 2,
            I: 3,
            INV: 158,
            XM: -11,
            X: 6,
            M: 6,
            E: 115
        },
        {
            ANO: "03/2019",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 93,
            XM: 336,
            X: 7,
            M: 6,
            E: 28
        },
        {
            ANO: "06/2019",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 56,
            XM: -126,
            X: 6,
            M: 7,
            E: 154
        },
        {
            ANO: "09/2019",
            PIB: 18,
            DA: 25,
            C: 12,
            G: 2,
            I: 3,
            INV: 82,
            XM: -31,
            X: 6,
            M: 6,
            E: 241
        }
]

export {PIB, datosHistoricos};
export default CalculatorData;