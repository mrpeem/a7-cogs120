
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var info = require('./routes/info');
var browse = require('./routes/browse');
var right = require('./routes/right');
var left = require('./routes/left');
var share = require('./routes/share');
var preference = require('./routes/preference');
var profile = require('./routes/profile');

// var user = require('./routes/user');

var app = express();

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

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var usernames = {};
var rooms = ['room1', 'room2', 'room3'];

io.sockets.on('connection', function(socket){
  console.log('a user connected');

  socket.on('addUser', function(username){
    socket.username = username;
    console.log(username + "has logged in");
    socket.room = rooms[0];
    usernames[username] = socket.username;
    socket.join(socket.room);
    updateClient(socket, username, socket.room);
    updateChatRoom(socket, 'connected');
    updateRoomList(socket, socket.room);

  });


  //send message
  socket.on('sendChat', function(data){
    console.log(socket.username + "sent a message");
    io.sockets.in(socket.room).emit('updateChat', socket.username, data);
  });

  socket.on('disconnect', function(){
    delete usernames[socket.username];
    io.sockets.emit('updateUsers', usernames);

    updateGlobal(socket, 'disconnected');
    socket.leave(socket.room);
  });

});