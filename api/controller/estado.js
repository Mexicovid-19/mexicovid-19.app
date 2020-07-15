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
 * Function to get confirmed cases per 100 habitants
 */
exports.getCasesPer1000Habitants = (req, res)=>{
    estadoService.getAll((error, response)=>{
        if(response){
            let newResponse = response
                // No incluir estado indefinido
                .filter(estado=>estado.abbrev != '??')
                // Generar daros para cada estado
                .map(estado=>({
                    id: estado.abbrev,
                    data: estado.confirmados
                        // Incluid datos cada tercer día, y el día actual
                        .filter((caso, i)=>( i%3==0 || i==estado.confirmados.length-1 ))
                        // Organizar en x, y. Reordenar fecha y calcular por 100k habitantes
                        .map(casos=>({
                            x: casos.date,
                            // x: [casos.date.split('/')[1], casos.date.split('/')[2], casos.date.split('/')[0]].join('/'),
                            y: ((casos.count / estado.poblacion) * 100000 ).toFixed(2)
                        }))
                }))
                // Ordenar por valor de y
                .sort((a,b)=>(
                b.data[b.data.length-1].y - a.data[a.data.length-1].y
                ))

            res.status(200).send(newResponse);


        } else if (error){
            res.statusMessage = 'there where problems with the database';
            return res.status(500).end();
        }
    })
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
                let query = {cve_ent: state.cve_ent};
                municipioService.findMunicipioByEnt(query, function(err, resp) {
                    if(resp) {
                        let decesos = state.decesos;
                        let confirmados = state.confirmados;
                        let pruebas = state.pruebas;
                        let poblacion = 0;

                        let allDecesos = resp.map(l=>l.decesos).flat().reduce((accum, curr)=>{
                            let found = accum.find(l=>l.date === curr.date);
                            if(found) found.count += curr.count;
                            else accum.push(curr);
                            return accum
                        }, []);
                        
                        let allConfirmados = resp.map(l=>l.confirmados).flat().reduce((accum, curr)=>{
                            let found = accum.find(l=>l.date === curr.date);
                            if(found) found.count += curr.count;
                            else accum.push(curr);
                            return accum
                        }, []);

                        let allPruebas = resp.map(l=>l.pruebas).flat().reduce((accum, curr)=>{
                            let found = accum.find(l=>l.date === curr.date);
                            if(found) found.count += curr.count;
                            else accum.push(curr);
                            return accum
                        }, []);

                        let allPoblacion = resp.map(l=>l.poblacion).reduce((accum, curr)=>accum+curr, 0);

                        

                        let _state = {
                            // ...state,
                            decesos: allDecesos,
                            confirmados: allConfirmados, 
                            pruebas: allPruebas,
                            poblacion: allPoblacion,
                        }

                         estadoService.updateEstado(query, _state, null, (err, response) => {
                            if (response) {
                                // res.status(200).send(response);
                                console.log("RESPONSE", response)
                            } else if (err) {
                                // res.status(400).send(err);
                                console.log(err)
                            }
                        });
                    }
                })
            });
            
            res.status(200).send({status: "updated"});
        } else if (error) {
            res.statusMessage = 'there where problems with the database';
            return res.status(500).end();
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