//database settings
var app = module.parent.app
exports.database = {route : ('mongodb://localhost/' + app.details.name) }