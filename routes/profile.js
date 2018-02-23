var data = require('../data.json');

exports.view = function(req, res){
    var loginStatus = data.currentUser.loginStatus;

    console.log("User is loggeed in: "+loginStatus);
    
    if (!loginStatus) { //not logged in; show pop up
    	res.render('profile_popup');
    }
    else {				//logged in; show profile page
    	res.render('profile');
    }

};

exports.register = function(req, res) {
	console.log("register");
	var newUser = 
	{
      "name": req.query.name,
      "email": req.query.email,
      "password": req.query.password
	};
	data.userList.push(newUser);
	console.log(data.userList);
	data.currentUser.loginStatus = true;
	data.currentUser.userName = req.query.name;
	res.render('profile', data);

};