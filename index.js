var m = 'main';
module.app = 	 			require('./bin/app/' + m);
var app = module.app
var server = 			require('./bin/server/' + m);
var router = 			require('./bin/router/' + m);
var filesystem =  require('./bin/filesystem/' + m);
var logger = 			require('./bin/logger/' + m);
var config = 			require('./config/config');
var intializers = require('./config/intializers');
var routes = 			require('./config/routes');
var render = 			require('ejs');
// var monk = 				require('monk')(config.database.route);
var mongoose = 		require('mongoose');
console.log(logger);
logger.log(server);
server.application.engine('.ejs', require('ejs').__express);

app.set('views', function(action){app.view(action)});

server.set('view engine', 'html');
router.build(routes);