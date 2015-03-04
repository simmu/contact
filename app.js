var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function(req, res){
    res.sendFile(__dirname +'/views/index.html');
});

app.get('/view', function(req, res){
    res.sendFile(__dirname +'/views/detail.html');
});

app.get('/new', function(req, res){
    res.sendFile(__dirname +'/views/new.html');
});


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
