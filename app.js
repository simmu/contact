var express = require('express');
var mongo = require('mongodb');
var dbServer = mongo.Server,
    Db = mongo.Db,
    bson = mongo.BSONPure;

var app = express();


var server = new dbServer('localhost',27017, {auto_reconnect:true});

var db = new Db('contact', server);

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

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

    /*
    res.render('index',{

        title:'contact',
        contact_list:[
            {
                id:1,
                last_name: 'Smith',
                first_name:'John'
            },
            {
                id:2,
                last_name: 'Smith',
                first_name:'Jane'
            },
            {
                id:3,
                last_name: 'Smith',
                first_name:'Randol'
            }
        ]
    });*/
});




app.get('/detail/:user_id', function(req, res){
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
    });
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
