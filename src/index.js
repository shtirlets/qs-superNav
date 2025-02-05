const {paint, $element} = require('./component')
const {definition} = require('./definition')
const {controller} = require('./controller');


define([], function() {
	'use strict';

	return {
		template: `
		<div class="message" style="background: #202a53; color: white;">
			<div>SUPER NAV Placeholder</div>
		</div>
		`,
		definition,
		support : {
			snapshot: false,
			export: true,
			exportData : false
		},
		paint,
		controller
	};

})


if (module.hot) {
	// hot-reloading used during development
	module.hot.accept('./templates/sideNav.html',()=> {
		var _template = require('./templates/sideNav.html');
		// window._template = _template;
		if ($element){
			// $('.qv-object-supernav-extension').remove()
			var _scope = $element.scope()
			// _scope.ext.template = _template
			_scope.object.reloadContent()
		}
	});
}