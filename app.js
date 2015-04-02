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


/*helper for jade template - check for undefined variable*/
app.locals.checkForUndefined = function(val){
    console.log(val);
    if(typeof val == 'undefined') return '';
    return val;
}


db.open(function(err, db){
 console.log('trying db');
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

app.get('/detail/:contact_id', function(req, res){
    var id = req.params.contact_id;
    db.collection('contactList', function(err, collection) {
    collection.findOne({_id: new bson.ObjectID(id)},function(err, user) {
            res.render('detail',{
                title:'contact',
                contact:user
            });

        });
    });
});

app.get('/new', function(req, res){
    res.render('new',{
        title:'New',
        contact:{}
    });
});

app.get('/edit/:contact_id', function(req, res){
    var id = req.params.contact_id;

    db.collection('contactList', function(err, collection) {
    collection.findOne({_id: new bson.ObjectID(id)},function(err, user) {
            res.render('edit',{
                title:'contact',
                contact:user
            });
        });
    });

});

app.post('/update', function(req, res){
    db.collection('contactList', function(err, collection) {

        var user = req.body;

        collection.update(
            {
                _id:new bson.ObjectID(user.contact_id)
            },
            {
                first_name:user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                email:user.email,
                address:user.address
            },
            {
                upsert:true
            },
            function(err, result) {
                if (err) {
                    console.log('Error updating wine: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    res.redirect('/');
                }
            });
    });
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

app.post('/delete', function(req, res){
    var id = req.body.contact_id;
    db.collection('contactList', function(err, collection) {

        collection.remove({_id: new bson.ObjectID(id)},function(err, user) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
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
