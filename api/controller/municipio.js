var municipioService = require('../service/municipios');

/**
 * Function to create the user in user collection.
 */
exports.create = function (req, res) {
    var body = new Municipio(req.body);
    if ( (!body.cve_ent_mun || !body.cve_ent && !body.cve_mun) && !body.nombre ) {
        res.statusMessage = 'CVE_ENT or CVE_MUN or name is missing';
        res.status(400).end();
        return;
    }

    municipioService.createMunicipio(body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.statusMessage = 'duplicated data';
            return res.status(400).end();
        }
    });
}

/**
 * Function to find user from user collection.
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

    municipioService.findMunicipioByEnt(query, function (error, response) {
        if (error) {
            res.status(404).send(error);
            return;
        }
        if (response) {
            console.log(response.length)
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No Data Found');
        }
    });
}

/**
 * Function to uodate the user data by filter condition.
 */
exports.update = function (req, res) {
    var body = req.body;
    var query = body.query;
    var data = body.data;
    var options = body.options;
    if (!query) {
        res.status(400).send('Bad request');
        return;
    }

    municipioService.updateMunicipio(query, data, options, (err, response) => {
        if (response) {
            res.status(200).send(response);
        } else if (err) {
            res.status(400).send(err);
        }
    });
}

class Municipio {
    constructor(munData) {
        this.cve_ent_mun = munData.cve_ent_mun || '';
        this.cve_ent = munData.cve_ent || '';
        this.cve_mun = munData.cve_mun || '';
        this.nombre = munData.nombre || '';
        this.poblacion = munData.poblacion || 0;
        this.decesos = munData.decesos || [];
        this.confirmados = munData.confirmados || [];
        this.pruebas = munData.pruebas || [];
        this.indice_vulnerabilidad = munData.indice_vulnerabilidad || 0;
    }
}