var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var jwt        = require('express-jwt');
var morgan = require('morgan');






const start = (settings,mediator,middlewares,routes,config={postLimit:'50mb'})=>{
  app.use(morgan('dev'));


  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({limit: config.postLimit, extended: true }));
  app.use(bodyParser.json({limit: config.postLimit}));



  var port = process.env.PORT || 3000;        // set our port

  // ROUTES FOR OUR API
  // =============================================================================
  var router = express.Router();              // get an instance of the express Router

  // REGISTER OUR ROUTES -------------------------------
  // all of our routes will be prefixed with /api
  //register middlewares
  app.use(middlewares);


  //register routes
  app.use('/', router,routes);



  // START THE SERVER
  // =============================================================================

  server = app.listen(port,function (){
    mediator.emit('server.started',this);
  });



}


module.exports = Object.assign({},{start});
