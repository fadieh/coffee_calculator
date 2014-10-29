server = require('express')();
http = require('http').createServer(server);

server.set('views', __dirname + '/views')
server.set('view engine', 'ejs');

server.get('/', function(request, response){
	response.render('index')
});

server.listen(3000, function(){
	console.log("Listening on port 3000")
});