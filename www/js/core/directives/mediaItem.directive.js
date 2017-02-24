/**
 * Created by antonia on 2017-02-23.
 */

angular.module('streama.core')
	.directive('streamaMediaItem', function () {
		return {
			restrict: 'AE',
			scope: {
				item: '='
			},
			templateUrl: 'templates/cores/mediaItem.directive.html',
			link: function ($scope, $element, $attrs) {
				console.log('%c called link', 'color: deeppink; font-weight: bold; text-shadow: 0 0 5px deeppink;');
			}
		}
	});
