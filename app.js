
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var dataSelector = require('./routes/dataSelector'); 
var right = require('./routes/right');
var left = require('./routes/left');
var info = require('./routes/info');
var share = require('./routes/share');
var show = require('./routes/show');
var external = require('./routes/external');
var userInfo = require('./routes/userInfo');
var browse = require('./routes/browse');
var preference = require('./routes/preference');
var filteredrRandom = require('./routes/filteredRandom');


var profile = require('./routes/profile');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/browse', browse.view);
app.get('/profile', profile.view);
app.get('/profile_register', profile.register);
app.get('/profile_login', profile.login);
//app.get('/profile_incorrect_login', profile.incorrect_login);
app.get('/profile_logout', profile.logout);

//app.get('/profile_goodle', profile.google);
app.get('/sharedChat/:userIdNumber/:categoryTitle/:itemId/show', userInfo.shareView);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/setShare', userInfo.view);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/unsetShare', userInfo.view2);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/unsetShareInfo', userInfo.exitShareInfo);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/setChat', userInfo.enterChatRoom);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/setChatInfo', userInfo.enterChatRoomInfo);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/setChatShare', userInfo.enterChatRoomShare);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/unsetChat', userInfo.exitChatRoom);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/unsetChatInfo', userInfo.exitChatRoomInfo);
app.get('/userData/:userIdNumber/:categoryTitle/:itemId/unsetChatShare', userInfo.exitChatRoomShare);
app.get('/sharedlink/:itemId/show', share.linkview);
app.get('/sharedlink/:itemId/show/info', share.infoview);
app.get('/sharedlink/:itemId/show/share', share.shareview);
app.get('/app/:categoryTitle', dataSelector.view);
app.get('/:categoryTitle/right', right.view);
app.get('/:categoryTitle/left', left.view);
app.get('/:categoryTitle/:itemId/info', info.view);
app.get('/:categoryTitle/:itemId/infoOne', info.viewOne);
app.get('/:categoryTitle/:itemId/share', share.view);
app.get('/:categoryTitle/:itemId/shareOne', share.viewOne);
app.get('/:categoryTitle/:itemId/show', show.view);
app.get('/:categoryTitle/:itemId/showOneItem', show.viewOneItem);
app.get('/:categoryTitle/:itemId/info/:externalId/external', external.view);
app.get('/preference', preference.view);
app.get('/app/:title/filteredRandom', filteredrRandom.view);
//app.get('/:categoryTitle/:itemId/info/:externalId/external/:webaddress', external.webview);

// Example route
// app.get('/users', user.list);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

