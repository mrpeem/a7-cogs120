var data = require('../data.json');


exports.view = function(req, res){

  var currentItemIndex = data.currentUser.currentItemIndex;
  var pageTitle = req.params.categoryTitle;
  var length = data.activityList.length;

  //console.log("list of length: " + data.activityList.length);
  //console.log("currentItemIndex: " + currentItemIndex);
  //console.log("after incresing currentItemIndex");
  currentItemIndex++;

  if(currentItemIndex >= length){
    console.log('reached the end of the list');
    data.currentUser.currentItemIndex = 0;
    currentItemIndex = 0;
  }
  else {
    data.currentUser.currentItemIndex = currentItemIndex;
  }



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
