var build = function (routes){
	if(typeof routes !== 'undefined'){
		for (var i=0;i< routes.routes.length;i++){
			var r = routes.routes[i];
			var act = r.action.split('#');
			server.get(r.path, function(req, res){
				res.render(act[1],{
					title: r.title || app.details.name,
					header: r.header || 'app_header'
				})(action = act);
			});
		};
	};
};

exports.build = build;
