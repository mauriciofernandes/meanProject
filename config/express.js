var express = require('express'),
    //home = require('../app/routes/home'),
    bodyParser = require('body-parser');
    load = require('express-load');

module.exports = function() {
  var app = express();

  // variável de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  load('models', {cwd : 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
