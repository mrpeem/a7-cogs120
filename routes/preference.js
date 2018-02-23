var data = require('../data.json');

console.log("preference.js");

exports.view = function(req, res){
	res.render('preference', data);
};
