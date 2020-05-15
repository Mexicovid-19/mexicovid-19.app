const { masterKey } = require('./../config');

function validateAPIKEY(req, res, next) {
	if(!req.headers.authorization) {
		res.statusMessage = "Unauthorizated request. Send the API KEY"
		return res.status(401).end();
	}
	console.log(masterKey)
	if(req.headers.authorization !== `Bearer ${masterKey}`) {
		res.statusMessage = "Unauthorizated request. Invalid API KEY"
		return res.status(401).end();
	}	
	
	next();
}

module.exports = validateAPIKEY;