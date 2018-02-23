//variables
var data = require('../data.json');
var allCategories = data.categories[0]['all'];
data.currentUser.currentPageViewed = "Browse";
data.allCategoryList.push(allCategories);


exports.view = function(req, res){

	res.render('browse', data);
};
