server = require('express')();
http = require('http').createServer(server);
bodyParser = require('body-parser')
Main = require('./src/main');

calc = new Main();

server.use(bodyParser.urlencoded({'extended':'true'}));
server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vnd.api+json'}));

server.set('views', __dirname + '/views')
server.set('view engine', 'ejs');

server.get('/', function(request, response){
	response.render('index')
});

server.post('/', function(request, response){
	console.log(+request.body.number1, +request.body.number2);
	var result = calc.addition(+request.body.number1, +request.body.number2);
	response.render('index', {result: result})
});

server.listen(3000, function(){
	console.log("Listening on port 3000")
});