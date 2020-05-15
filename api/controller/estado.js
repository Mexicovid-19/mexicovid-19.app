var estadoService = require('../service/estados');
var municipioService = require('../service/municipios');

/**
 * Function to create the estado in estado collection.
 */
exports.create = function (req, res) {
    var body = new Estado(req.body);
    if (!body.cve_ent  && !body.nombre ) {
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
    //municipioService.findMunicipioByEnt()

    estadoService.updateEstado(query, data, options, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}

class Estado {
    constructor(munData) {
        this.cve_ent = munData.cve_ent || '';
        this.nombre = munData.nombre || '';
        this.poblacion = munData.poblacion || 0;
        this.decesos = munData.decesos || [];
        this.confirmados = munData.confirmados || [];
        this.pruebas = munData.pruebas || [];
    }
}