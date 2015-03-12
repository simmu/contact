var express = require('express');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var dbServer = mongo.Server,
    Db = mongo.Db,
    bson = mongo.BSONPure;

var app = express();


var server = new dbServer('localhost',27017, {auto_reconnect:true});

var db = new Db('contact', server);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser());
app.use(express.static('public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


db.open(function(err, db){
   if(!err){
       console.log('connected to db');
   }
});


app.get('/', function(req, res){


    db.collection('contactList', function(err, collection) {
        collection.find().toArray(function(err, items) {
            console.log('items',items);

            res.render('index',{
                title:'contact',
                contact_list:items
            });

        });
    });

});




app.get('/detail/:user_id', function(req, res){
    var id = req.params.user_id;
    db.collection('contactList', function(err, collection) {
    collection.findOne({_id: new bson.ObjectID(id)},function(err, user) {
            res.render('detail',{
                title:'contact',
                contact:user
            });

        });
    });
    /*
    res.render('detail',{
        title:'detail',
        contact:{
            id:2,
            last_name: 'Smith',
            first_name:'Jane',
            phone:9173336666,
            email:'JSmith@gmail.com',
            address:'1600 Pennsylvania Avenue Northwest, Washington, DC 20500'
        }
    });*/
});

app.get('/new', function(req, res){
    res.render('new',{title:'new'});
});

app.post('/new', function(req, res){
    var user = req.body;
    console.log('user', user);
    db.collection('contactList', function(err, collection) {
        collection.insert(user, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.redirect('/');
            }
        });
    });
});




var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at 222 http://%s:%s', host, port);

});
