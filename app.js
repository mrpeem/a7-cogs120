
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
app.get('/preference', preference.view);
app.get('/profile', profile.view);
app.get('/profile_register', profile.register);


// Example route
// app.get('/users', user.list);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

