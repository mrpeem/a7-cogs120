//variables
var data = require('../data.json');

var userData = require('../userData.json');
var popularCategoryList = require('../popularCategoryListData.json');
var categoryList = require('../categoryListData.json');
var dataType = require('../dataType.json');


exports.view = function(req, res){
	res.render('index', data);
};
