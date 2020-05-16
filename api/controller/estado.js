var estadoService = require('../service/estados');
var municipioService = require('../service/municipios');

/**
 * Function to create the estado in estado collection.
 */
exports.create = function (req, res) {
    var body = new Estado(req.body);
    if (!body.cve_ent  && !body.nombre && !body.abbrev ) {
        res.statusMessage = 'CVE_ENT or name is missing';
        res.status(400).end();
        return;
    }

    estadoService.createEstado(body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.statusMessage = 'duplicated data';
            return res.status(400).end();
        }
    });
}

/**
 * Function to create the estado in estado collection.
 */
exports.getAll = function (req, res) {
   estadoService.getAll( function (error, response) {
        if (response) {
            res.status(200).send(response);
        } else if (error) {
            res.statusMessage = 'there where problems with the database';
            return res.status(500).end();
        }
    });
}

/**
 * Function to find estado from estado collection.
 */
exports.findByEnt = function (req, res) {
    var params = req.params || {};
    var query = {
        cve_ent: params.cve_ent
    };
    
    if (!query) {
        res.statusMessage = 'cve_ent is missing';
        res.status(400).end();
        return;
    }

    estadoService.findEstado(query, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
}

/**
 * Function to uodate the estado data by filter condition.
 */
exports.update = function (req, res) {
    estadoService.getAll( function (error, response) {
        if (response) {
            response.forEach(state => {
                municipioService.findMunicipioByEnt({cve_ent: state.cve_ent}, function(err, resp) {
                    if(resp) {
                        let decesos = state.decesos;
                        let confirmados = state.confirmados;
                        let pruebas = state.pruebas;
                        let poblacion = 0;

                        resp.forEach(mun => {
                            poblacion += mun.poblacion;
                            
                            for(var i in mun.decesos) {
                                let index = decesos.findIndex((el) => el.date == mun.decesos[i].date)
                                
                                //if found
                                if(index > 0) {
                                    state.decesos[index].count += mun.decesos[i].count;
                                } else {
                                    state.decesos[index] = {
                                        date: mun.decesos[i].date,
                                        count: mun.decesos[i].count
                                    }
                                }
                            }

                            for(var i in mun.confirmados) {
                                let index = confirmados.findIndex((el) => el.date == mun.confirmados[i].date)
                                
                                //if found
                                if(index > 0) {
                                    state.confirmados[index].count += mun.confirmados[i].count;
                                } else {
                                    state.confirmados[index] = {
                                        date: mun.confirmados[i].date,
                                        count: mun.confirmados[i].count
                                    }
                                }
                            }

                            for(var i in mun.pruebas) {
                                let index = pruebas.findIndex((el) => el.date == mun.pruebas[i].date)
                                
                                //if found
                                if(index > 0) {
                                    state.pruebas[index].count += mun.pruebas[i].count;
                                } else {
                                    state.pruebas[index] = {
                                        date: mun.pruebas[i].date,
                                        count: mun.pruebas[i].count
                                    }
                                }
                            }
                            
                        });
                    }
                })
            });
            
            res.status(200).send(response);
        } else if (error) {
            res.statusMessage = 'there where problems with the database';
            return res.status(500).end();
        }
    });

    estadoService.updateEstado(query, data, options, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}

class Estado {
    constructor(estData) {
        this.cve_ent = estData.cve_ent || '';
        this.abbrev = estData.abbrev || '';
        this.nombre = estData.nombre || '';
        this.poblacion = estData.poblacion || 0;
        this.decesos = estData.decesos || [];
        this.confirmados = estData.confirmados || [];
        this.pruebas = estData.pruebas || [];
    }
}