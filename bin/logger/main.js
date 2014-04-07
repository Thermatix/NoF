var logger = require('logfmt')
var colors = require('colors')

function log(input, type){
	type = typeof type !== 'undefined' ? type : 'plain'
	var result;
	switch (type)
	{
		case'plain':
			console.log(input)
			break;
		case 'string':
			console.log(input.blue);
			break;
		case 'json':
			logger.stringify(input.green);
			break;

		case 'query':
			logger.parse(input.yellow);
			break;

		default:
		result = 'Unsupported type, can only log string, json and query';
			break;
	}
	return result || true;
};

function webLog(input){
	type = typeof type !== 'undefined' ? type : 'plain'
	var result;
	switch (type)
	{
		case'plain':
			console.log(input)
			break;
		case 'string':
			
			break;
		case 'json':
			
			break;

		case 'query':
			
			break;

		default:
		result = 'Unsupported type, can only log string, json and query'
			break;
	}
	return result;
};

function serverLog(input){
	type = typeof type !== 'undefined' ? type : 'plain'
	var result;
	switch (type)
	{
		case'plain':
			console.log(input)
			break;
		case 'string':
			
			break;
		case 'json':
			
			break;

		case 'query':
			
			break;

		default:
		result = 'Unsupported type, can only log string, json and query'
			break;
	}
	return result;
};


exports.log = log;
// exports.webLog = webLog();
// exports.serverLog = serverLog();
// exports.wlog = webLog();
// exports.slog = serverLog();