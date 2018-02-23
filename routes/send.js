var data = require('../data.json');


exports.view = function(req, res){
  var categoryTitle = req.params.categoryTitle;
  var itemId = req.params.itemId;

  console.log("inside of send.js file");
  console.log(data.currentUser.isScreenShared);
  console.log(categoryTitle);
  console.log(itemId);
  data.currentUser.isScreenShared = true;
	res.render('share', {
    'categoryTitle':categoryTitle,
    'itemId':itemId
  });
};
