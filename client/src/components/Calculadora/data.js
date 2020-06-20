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

const datosHistoricosMXN =[{
            ANO: 2010,
            PIB: 14371712,
            DA: 18614192,
            C: 9622216,
            G: 1799999,
            I: 0,
            INV: 228940,
            XM: -244506,
            X: 3997974,
            M: 4242480,
            E: -92091,
        },
        {
            ANO: 2010,
            PIB: 14998393,
            DA: 19639422,
            C: 9983677,
            G: 1883425,
            I: 1,
            INV: 198100,
            XM: -265381,
            X: 4375648,
            M: 4641028,
            E: 78556,
        },
        {
            ANO: 2010,
            PIB: 14921450,
            DA: 19717872,
            C: 10086368,
            G: 1833562,
            I: 2,
            INV: 84349,
            XM: -355623,
            X: 4440799,
            M: 4796422,
            E: 150667,
        },
        {
            ANO: 2010,
            PIB: 15499623,
            DA: 20407448,
            C: 10514523,
            G: 1895946,
            I: 3,
            INV: 178137,
            XM: -198347,
            X: 4709478,
            M: 4907825,
            E: -243065,
        },
        {
            ANO: 2011,
            PIB: 14902786,
            DA: 19503099,
            C: 9928610,
            G: 1855306,
            I: 4,
            INV: 227536,
            XM: -58428,
            X: 4541885,
            M: 4600313,
            E: -197704,
        },
        {
            ANO: 2011,
            PIB: 15413082,
            DA: 20291125,
            C: 10281264,
            G: 1908636,
            I: 5,
            INV: 166566,
            XM: -147095,
            X: 4730948,
            M: 4878043,
            E: -122043,
        },
        {
            ANO: 2011,
            PIB: 15526005,
            DA: 20602513,
            C: 10524310,
            G: 1893488,
            I: 6,
            INV: 54409,
            XM: -364856,
            X: 4711651,
            M: 5076507,
            E: -31371,
        },
        {
            ANO: 2011,
            PIB: 16139460,
            DA: 21216618,
            C: 10823685,
            G: 1980512,
            I: 7,
            INV: 109663,
            XM: -186042,
            X: 4891116,
            M: 5077158,
            E: -309709,
        },
        {
            ANO: 2012,
            PIB: 15619687,
            DA: 20517569,
            C: 10407114,
            G: 1950910,
            I: 8,
            INV: 233115,
            XM: -79496,
            X: 4818385,
            M: 4897881,
            E: -333772,
        },
        {
            ANO: 2012,
            PIB: 16027317,
            DA: 21183345,
            C: 10474875,
            G: 1998170,
            I: 9,
            INV: 216487,
            XM: -28494,
            X: 5127534,
            M: 5156028,
            E: -153902,
        },
        {
            ANO: 2012,
            PIB: 15952746,
            DA: 21165257,
            C: 10644822,
            G: 1935795,
            I: 10,
            INV: 46571,
            XM: -248424,
            X: 4964087,
            M: 5212511,
            E: -50190,
        },
        {
            ANO: 2012,
            PIB: 16639145,
            DA: 22068126,
            C: 11003205,
            G: 2009949,
            I: 11,
            INV: 148142,
            XM: -231842,
            X: 5197140,
            M: 5428981,
            E: -21062,
        },
        {
            ANO: 2013,
            PIB: 15720278,
            DA: 20628288,
            C: 10462851,
            G: 1936144,
            I: 12,
            INV: 144782,
            XM: -170509,
            X: 4737500,
            M: 4908009,
            E: -9446,
        },
        {
            ANO: 2013,
            PIB: 16362711,
            DA: 21767510,
            C: 10745148,
            G: 1976183,
            I: 13,
            INV: 310181,
            XM: -241875,
            X: 5162924,
            M: 5404799,
            E: 122374,
        },
        {
            ANO: 2013,
            PIB: 16186046,
            DA: 21594282,
            C: 10842706,
            G: 1965432,
            I: 14,
            INV: 196518,
            XM: -271217,
            X: 5137019,
            M: 5408236,
            E: 38008,
        },
        {
            ANO: 2013,
            PIB: 16839713,
            DA: 22252463,
            C: 11226299,
            G: 2059901,
            I: 15,
            INV: 156465,
            XM: -67475,
            X: 5345276,
            M: 5412751,
            E: -150936,
        },
        {
            ANO: 2014,
            PIB: 16135556,
            DA: 21251310,
            C: 10636123,
            G: 2001205,
            I: 16,
            INV: 184500,
            XM: -172756,
            X: 4942998,
            M: 5115754,
            E: 141642,
        },
        {
            ANO: 2014,
            PIB: 16736971,
            DA: 22324373,
            C: 10962786,
            G: 2019693,
            I: 17,
            INV: 134343,
            XM: -135213,
            X: 5452189,
            M: 5587403,
            E: 277919,
        },
        {
            ANO: 2014,
            PIB: 16645076,
            DA: 22391038,
            C: 11090727,
            G: 2027191,
            I: 18,
            INV: 106028,
            XM: -238709,
            X: 5507253,
            M: 5745962,
            E: 92009,
        },
        {
            ANO: 2014,
            PIB: 17417017,
            DA: 23352512,
            C: 11496190,
            G: 2096993,
            I: 19,
            INV: 214340,
            XM: -32004,
            X: 5903491,
            M: 5935495,
            E: -229905,
        },
        {
            ANO: 2015,
            PIB: 16697180,
            DA: 22176828,
            C: 10921789,
            G: 2074841,
            I: 20,
            INV: 293053,
            XM: 23278,
            X: 5502926,
            M: 5479648,
            E: -124071,
        },
        {
            ANO: 2015,
            PIB: 17239434,
            DA: 23168264,
            C: 11121056,
            G: 2077971,
            I: 21,
            INV: 159601,
            XM: 53226,
            X: 5982056,
            M: 5928830,
            E: 146817,
        },
        {
            ANO: 2015,
            PIB: 17309618,
            DA: 23481062,
            C: 11418154,
            G: 2030760,
            I: 22,
            INV: 23597,
            XM: -179026,
            X: 5992418,
            M: 6171444,
            E: 153301,
        },
        {
            ANO: 2015,
            PIB: 17889191,
            DA: 24018892,
            C: 11924649,
            G: 2116416,
            I: 23,
            INV: 91986,
            XM: 33666,
            X: 6163367,
            M: 6129701,
            E: -201411,
        },
        {
            ANO: 2016,
            PIB: 17197681,
            DA: 22852632,
            C: 11329619,
            G: 2082846,
            I: 24,
            INV: 287193,
            XM: 48243,
            X: 5703194,
            M: 5654951,
            E: -181831,
        },
        {
            ANO: 2016,
            PIB: 17809346,
            DA: 23905690,
            C: 11554881,
            G: 2143696,
            I: 25,
            INV: 191620,
            XM: 17723,
            X: 6114066,
            M: 6096343,
            E: 139979,
        },
        {
            ANO: 2016,
            PIB: 17666883,
            DA: 23975065,
            C: 11853430,
            G: 2108424,
            I: 26,
            INV: 54869,
            XM: -91859,
            X: 6216323,
            M: 6308182,
            E: -43698,
        },
        {
            ANO: 2016,
            PIB: 18473732,
            DA: 24799333,
            C: 12348331,
            G: 2180669,
            I: 27,
            INV: 88651,
            XM: 128932,
            X: 6454533,
            M: 6325602,
            E: -226196,
        },
        {
            ANO: 2017,
            PIB: 17791095,
            DA: 23893751,
            C: 11734761,
            G: 2136567,
            I: 28,
            INV: 284645,
            XM: 141863,
            X: 6244519,
            M: 6102656,
            E: -156630,
        },
        {
            ANO: 2017,
            PIB: 18149132,
            DA: 24560751,
            C: 11968388,
            G: 2154880,
            I: 29,
            INV: 171208,
            XM: -21790,
            X: 6389828,
            M: 6411619,
            E: 230645,
        },
        {
            ANO: 2017,
            PIB: 17943736,
            DA: 24588868,
            C: 12244444,
            G: 2093410,
            I: 30,
            INV: 59542,
            XM: -459163,
            X: 6185969,
            M: 6645132,
            E: 255342,
        },
        {
            ANO: 2017,
            PIB: 18770647,
            DA: 25549561,
            C: 12645980,
            G: 2187423,
            I: 31,
            INV: 90738,
            XM: -92397,
            X: 6686518,
            M: 6778914,
            E: 91526,
        },
        {
            ANO: 2018,
            PIB: 18072389,
            DA: 24508467,
            C: 12011828,
            G: 2203386,
            I: 32,
            INV: 227676,
            XM: -72073,
            X: 6364004,
            M: 6436078,
            E: -16128,
        },
        {
            ANO: 2018,
            PIB: 18701100,
            DA: 25556232,
            C: 12343826,
            G: 2272110,
            I: 33,
            INV: 111701,
            XM: 106898,
            X: 6962030,
            M: 6855132,
            E: 24897,
        },
        {
            ANO: 2018,
            PIB: 18395545,
            DA: 25436220,
            C: 12542439,
            G: 2149966,
            I: 34,
            INV: 66978,
            XM: -315064,
            X: 6725611,
            M: 7040675,
            E: 188387,
        },
        {
            ANO: 2018,
            PIB: 19037446,
            DA: 26168678,
            C: 12816062,
            G: 2204819,
            I: 35,
            INV: 106591,
            XM: -160889,
            X: 6970343,
            M: 7131232,
            E: 364523,
        },
        {
            ANO: 2019,
            PIB: 18282106,
            DA: 24833300,
            C: 12121935,
            G: 2186296,
            I: 36,
            INV: 158915,
            XM: -11913,
            X: 6539281,
            M: 6551194,
            E: 115374,
        },
        {
            ANO: 2019,
            PIB: 18523717,
            DA: 25291788,
            C: 12313708,
            G: 2205755,
            I: 37,
            INV: 93370,
            XM: 336075,
            X: 7104146,
            M: 6768071,
            E: 28729,
        },
        {
            ANO: 2019,
            PIB: 18348815,
            DA: 25385713,
            C: 12639218,
            G: 2107906,
            I: 38,
            INV: 56140,
            XM: -126089,
            X: 6910809,
            M: 7036898,
            E: 154735,
        },
        {
            ANO: 2019,
            PIB: 18943796,
            DA: 25751833,
            C: 12936646,
            G: 2200040,
            I: 39,
            INV: 82686,
            XM: -31833,
            X: 6776204,
            M: 6808037,
            E: 241893
        },
]
let anios = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
let anios2 = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
//Porcentajes
let _datosHistoricosPromedio = {};
let datosHistoricosPromedio = [];
datosHistoricos.forEach(q=>{
    let year = anios.find(l=>q.ANO.includes(l))
    if(_datosHistoricosPromedio[year] === undefined){
        _datosHistoricosPromedio[year] = {PIB: 0} 
    }
        _datosHistoricosPromedio[year].PIB+=0.25*Number(q.PIB);
})
Object.keys(_datosHistoricosPromedio).forEach(anio=>{
    let obj = {
        ANO: anio, 
        ..._datosHistoricosPromedio[anio]
    }
    datosHistoricosPromedio.push(obj)
})
console.log(datosHistoricosPromedio)


//MXN
let _datosHistoricosPromedioMXN = {};
let datosHistoricosPromedioMXN = [];
datosHistoricosMXN.forEach(q=>{
    let year = anios2.find(l=>q.ANO.includes(l))
    if(_datosHistoricosPromedioMXN[year] === undefined){
        _datosHistoricosPromedioMXN[year] = {PIB: 0} 
    }
        _datosHistoricosPromedioMXN[year].PIB+=Number(q.PIB);
})
Object.keys(_datosHistoricosPromedioMXN).forEach(anio=>{
    let obj = {
        ANO: anio, 
        ..._datosHistoricosPromedioMXN[anio]
    }
    datosHistoricosPromedioMXN.push(obj)
})
console.log(datosHistoricosPromedioMXN)


export {PIB, datosHistoricos, datosHistoricosPromedio,datosHistoricosPromedioMXN};
export default CalculatorData;