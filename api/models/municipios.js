const mongoose = require( 'mongoose' );

const municipioSchema = mongoose.Schema({
    cve_ent_mun: {
        type: String,
        required: true,
        unique: true
    },
    cve_ent: {
        type: String,
        required: true
    },
    cve_mun: {
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
    ],
    indice_vulnerabilidad: {
        type: Number,
        default: 0
    }
});

const municipio = mongoose.model( 'municipios', municipioSchema );

module.exports = { municipio };