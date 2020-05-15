const mongoose = require( 'mongoose' );

const estadosSchema = mongoose.Schema({
    cve_ent: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    poblacion: {
        type: Number,
        default: 0
    },
    decesos: [
        {
            date: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ],
    confirmados: [
        {
            date: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ],
    pruebas: [
        {
            date: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ]
});

const estados = mongoose.model( 'estadoss', estadosSchema );

module.exports = { estados };