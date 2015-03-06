var express = require('express');
var app = express();


app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/', function(req, res){
    //res.sendFile(__dirname +'/views/index.html');
    console.log('what');
    res.render('index',{title:'hey'});
});

app.get('/detail', function(req, res){
    res.render('detail',{title:'detail'});
    //res.sendFile(__dirname +'/views/detail.html');
});

app.get('/new', function(req, res){
    res.render('new',{title:'new'});
});


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at 222 http://%s:%s', host, port)

});
