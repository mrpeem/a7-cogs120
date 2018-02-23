//variables
var data = require('../data.json');
var allCategories = data.categories[0]['all'];
data.currentUser.currentPageViewed = "Browse";
data.allCategoryList.push(allCategories);
var userData = require('../userData.json');
var categoryList = require('../categoryListData.json');
var popularCategoryList = require('../popularCategoryListData.json');



exports.view = function(req, res){

	res.render('browse', userData);
};
