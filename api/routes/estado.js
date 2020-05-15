var express = require('express');
var router = express.Router();
var estado = require('../controller/estado');

/**
 * To create the New estado
 */
router.post('/', estado.create);

/**
 * TO get the single estado by their state CVE_ENT
 */
router.get('/todos', estado.getAll);

/**
 * TO get the single estado by their state CVE_ENT
 */
router.get('/estado/:state', estado.findByEnt);

/**
 * To update the user data by filter condition
 */
router.put('/update', estado.update);

module.exports = router;