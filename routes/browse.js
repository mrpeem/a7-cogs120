//database
var userData = require('../userData.json');
var popularCategoryList = require('../popularCategoryListData.json');
var categoryList = require('../categoryListData.json');
var loginStatus = userData.loginStatus;

exports.view = function(req, res){

	res.render('browse', data);
};
