'use strict';

juke.directive('sidebar', function () {
	return {
		restrict: 'E',
		templateUrl: '/js/sidebar/templates/sidebar.html',
		link: function (scope) {
			scope.doThisWhenDoubleClicking = function () {
				console.log('I happened');
			};
		}
	};
});