
var express = require('express')
  , bodyParser = require('body-parser');

var app = express();
const { spawn } = require('child_process');
app.use(bodyParser.json());

app.post('/playMagnet', function(request, response){

	console.log(request.body.magnet);      // your JSON
	let buff = new Buffer(request.body.magnet, 'base64');  
	let text = buff.toString('ascii');
	response.send(text);    // echo the result back
	fun(text);
});


var fun =function(magnet){
	console.log("fun() start");
	const find = spawn('C:\\Users\\Utilisateur\\AppData\\Local\\WebTorrent\\WebTorrent.exe ', [magnet,"-o"]);
}
app.listen(3000);