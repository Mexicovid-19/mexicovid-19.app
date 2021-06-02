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
router.get('/:cve_ent', municipio.findByEnt);

/**
 * To get all files
 */
router.get('/', municipio.findAll);

/**
 * To update the user data by filter condition
 */
router.put('/update', municipio.update);


/**
 * WARNING: Deprecated. To be removed. 
 */

// router.get('/load_data', function(req, res) {
//     console.log("loading")
//     var fs = require('fs');
//     fs.readFile("data/region/municipios_poblacion_entmun.csv", "utf8", function(err, data){
// 		if(err) {
// 			res.statusMessage = "file didn't load."
// 			res.status(404).end();
// 		} else {
//             var d3 = require('d3');
//             let muns = d3.csvParse(data.slice(1));
            
//             muns.forEach(mun => {
//                 if(mun["cve_ent_mun"].length != 5) {
//                     mun["cve_ent_mun"] =  "0" + mun["cve_ent_mun"];
//                 }

//                 let id = mun["cve_ent_mun"];
//                 //last 3
//                 mun["cve_mun"] = id.substr(-3);  
//                 //delete last 3
//                 mun["cve_ent"] = id.slice(0, -3);
                
//                 let _req = {
//                     "body": mun
//                 }
//                 municipio.create(_req,res);
//             });
			
// 			res.status(200).json(muns);
// 		}
// 	});
	
// 	return res;
// });

router.get('/load_data', function(req, res) {
    console.log("loading")
    var fs = require('fs');
    fs.readFile("data/region/municipios_poblacion_entmun.csv", "utf8", function(err, data){
		if(err) {
			res.statusMessage = "file didn't load."
			res.status(404).end();
		} else {
            var d3 = require('d3');
            let muns = d3.csvParse(data.slice(1));
            
            muns.forEach(mun => {
                if(mun["cve_ent_mun"].length != 5) {
                    mun["cve_ent_mun"] =  "0" + mun["cve_ent_mun"];
                }

                let id = mun["cve_ent_mun"];
                //last 3
                mun["cve_mun"] = id.substr(-3);  
                //delete last 3
                mun["cve_ent"] = id.slice(0, -3);
                
                let _req = {
                    "body": mun
                }
                municipio.create(_req,res);
            });
			
			res.status(200).json(muns);
		}
	});
	
	return res;
});

module.exports = router;