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

export {PIB};
export default CalculatorData;