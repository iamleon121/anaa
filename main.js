var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello Leon');
});

var server = app.listen(8080,function(){
});