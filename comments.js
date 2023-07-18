// create web server
var express = require('express');
var app = express();
// create server
var server = require('http').createServer(app);
// create socket
var io = require('socket.io')(server);

// listen to port 3000
server.listen(3008);

// use ejs
app.set('view engine', 'ejs');

// use static file
app.use(express.static('./public'));

// create array comments
var comments = ['hello', 'world'];

// render index.ejs
app.get('/', function(req, res){
	res.render('index');
});

// socket
io.on('connection', function(socket){
	// send comments to client
	socket.emit('send comments', comments);

	// receive comments from client
	socket.on('receive comments', function(data){
		comments.push(data);
		socket.broadcast.emit('send comments', comments);
	});
});
