var express = require('express');
var router = express.Router();
var municipio = require('../controller/municipio');

/**
 * To create the New municipio
 */
router.post('/', municipio.create);

/**
 * TO get the single municipio by their state CVE_ENT
 */
router.get('/municipio/:state', municipio.findByEnt);

/**
 * To update the user data by filter condition
 */
router.put('/update', municipio.update);

module.exports = router;