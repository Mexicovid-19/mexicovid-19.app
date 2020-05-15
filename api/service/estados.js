(function () {
    var mongoose = require('mongoose');
    var estado = mongoose.model('estados');
    /**
     * Function to execute the create query to create the estados.
     * @param {*} data estado data
     * @param {*} callback callback function.
     */
    exports.createEstado = function (data, callback) {
        estado.create(data).then((response) => {
            callback(null, response);
        }, (error) => {
            callback(error, null);
        });
    };

    /**
     * Funtion to find the estado from collections.
     * @param {*} query condition or expression to find the estado from collection.
     * @param {*} callback callback function
     */
    exports.findEstado = function (query, callback) {
        estado.findOne(query, callback);
    };

    /**
     * Function to execute the update query.
     * @param {*} query Condition or filter to find the user.
     * @param {*} data data which we need to update.
     * @param {*} options 
     */
    exports.updateEstado = function (query, data, options, callback) {
        estado.findOneAndUpdate(query, data, options, (err, response) => {
            callback(err, response);
        });
    }
})()