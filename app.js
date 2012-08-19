var express = require('express');

var app = express();

//configure

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.get('/',function(req,res){
	res.render('index', {
		pageTitle:'Simple Express 3 and Jade example'
	});
});

app.listen(3000);
console.log('listening on port 3000');