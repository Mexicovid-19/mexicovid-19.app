(function () {
    var mongoose = require('mongoose');
    var municipio = mongoose.model('municipios');
    /**
     * Function to execute the create query to create the municipios.
     * @param {*} data municipio data
     * @param {*} callback callback function.
     */
    exports.createMunicipio = function (data, callback) {
        municipio.create(data).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    /**
     * Funtion to find the municipio from collections.
     * @param {*} q|uery condition or expression to find the municipio from collection.
     * @param {*} callback callback function
     */
    exports.findMunicipio = function (query, callback) {
        municipio.findOne(query, callback);
    };

    /**
     * Funtion to find the municipio from collections.
     * @param {*} query condition or expression to find the municipio from collection.
     * @param {*} callback callback function
     */
    exports.findMunicipioByEnt = function (query, callback) {
        municipio.find(query).sort({"cve_mun": 1}).exec(callback);
    };

    /**
     * Function to execute the update query.
     * @param {*} query Condition or filter to find the user.
     * @param {*} data data which we need to update.
     * @param {*} options 
     */
    exports.updateMunicipio = function (query, data, options, callback) {
        municipio.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    }
    /**
     * Function to get all files
     */
    exports.getAll = (callback)=>{
        // municipio.find({}, (err, response)=>{
        //     callback(err,response)
        // })
        let stream = municipio.find({}).select('-_id -decesos._id -confirmados._id -pruebas._id').lean().cursor();
        callback(stream)
    }
})()