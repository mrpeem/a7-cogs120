var data = require('../data.json');
var randomList = require('../randomList.json');


exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;


	res.render('info', {
    'categoryTitle':categoryTitle,
    'itemId':itemId,
    'description': "hello"
  });
};
