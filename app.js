var express = require('express');
var bodyParser = require('body-parser');



// sets the render for the home page
var controller = require('./Controllers/index-controller.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


// the controller references the var above
// the .index references the index: in the index-controllers.js file
app.get('/', controller.index); 

// app.get('/css',function(){
	
// });

var server = app.listen(6206, function() {
	console.log('Express server listening on port ' + server.address().port);
});
