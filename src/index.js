var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var jwt        = require('express-jwt');
var morgan = require('morgan');

const start = (settings,mediator,middlewares,routes,config={postLimit:'50mb',routePrefix:'/',morgan:'dev'})=>{

  app.use(morgan(config.morgan));


  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({limit: config.postLimit, extended: true }));
  app.use(bodyParser.json({limit: config.postLimit}));



  var port = settings.port || 3000;        // set our port


  // REGISTER OUR ROUTES -------------------------------
  //register middlewares
  app.use(middlewares);


  //register routes
  app.use(config.routePrefix,routes);



  // START THE SERVER
  // =============================================================================

  server = app.listen(port,function (){
    mediator.emit('server.ready',this);
  });

}


module.exports = Object.assign({},{start});
