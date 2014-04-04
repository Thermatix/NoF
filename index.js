var m = 'main';
var app = 	 require('./bin/app/' + m);
var server = require('./bin/server/' + m);
var router = require('./bin/router/' + m);
var config = 			require('./config/settings');
var intializers = require('./config/intializers')
var routes = 			require('./config/routes')
var logger = require('logfmt');
var filesystem = require('fs');
var render = require('ejs');
var monk = require('monk')(config.database.route);
var mongoose = require('mongoose');