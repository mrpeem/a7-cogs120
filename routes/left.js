var data = require('../data.json');




exports.view = function(req, res){

  var currentItemIndex = data.currentUser.currentItemIndex;
  var pageTitle = req.params.categoryTitle;

  console.log("length: " + data.activityList.length);
  if(currentItemIndex === 0){
    console.log('reached the first of the list');
    currentItemIndex = data.activityList.length;
  }
  currentItemIndex--;
  data.currentUser.currentItemIndex = currentItemIndex;
  console.log("currentItemIndex: " + currentItemIndex);

  if(pageTitle === "activities" || "Activities"){

    console.log('activites is chosen');
    console.log('current Index: '+ currentItemIndex);
    var itemObj = data.activityList[currentItemIndex];
    var itemTitle = itemObj.itemTitle;
    var caption = itemObj.caption;
    var itemURL = itemObj.URL;
    console.log(itemURL);
  }

  res.render('play', {
  	'pageTitle': pageTitle,
    'itemTitle' : itemTitle,
    'caption' : caption,
    'itemURL' : itemURL
  });
};
