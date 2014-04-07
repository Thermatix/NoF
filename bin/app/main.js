var details = {name : ''};
var paths = {
	root:  				'../../../',
	lib: 				 this.root + '/lib',
	tmp: 				 this.root + '/tmp',
	config: 		 this.root + '/config',
	app: 				 this.root +'/app',
	assets:      this.app + '/assets',
	images: 		 this.assets + '/images',
	stylesheets: this.assets + '/stylesheets',
	javascript:  this.assets + '/javascript',
	controllers: this.app + '/controllers',
	filters: 		 this.app + '/filters',
	models: 		 this.app + '/models',
	views: 			 this.app + '/views'
	

}

view = function (action){
	if (typeof action =='string'){
			var act = action.split('#')
	}
	else if(typeof action == 'undefined'){
		return
	}
	else if(typeof action !== 'array'){
		throw new Error('View only accepts string or array, action was:' + typeof action)
	};
	return paths.views + '/' + act[0] + '/' + act[1];
};

exports.details = details;
exports.paths = paths;
exports.view = view;