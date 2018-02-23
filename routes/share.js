var data = require('../data.json');

exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;
  console.log(categoryTitle);
  console.log(itemId);
	res.render('share', {
    'categoryTitle':categoryTitle,
    'itemId':itemId
  });
};
