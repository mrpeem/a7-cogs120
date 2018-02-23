var data = require('../data.json');

var currentCategories = data.categories[0]['popular'];
data.currentUser.currentPageViewed = "Search";
data.currentUsercategoryList.push(currentCategories);

exports.view = function(req, res){

	res.render('search', data);
};
