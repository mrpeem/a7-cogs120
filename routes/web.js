var data = require('../data.json');

exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;
  var web = req.params.web;
  console.log(categoryTitle);
  console.log(itemId);
  console.log(req.params);


	res.render('web', {
    'categoryTitle': categoryTitle,
    'itemId' : itemId,
    'web' : web



  });
};
