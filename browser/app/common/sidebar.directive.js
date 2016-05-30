(function() {
	'use strict';

	angular
		.module('app.common')
		.directive('sidebar', sidebar);

	function sidebar() {
		var directive = {
			restrict: 'E',
			templateUrl: '/app/common/sidebar/sidebar.html'
		};
		return directive;
	}
})();