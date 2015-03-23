'use strict';

/**
 * @ngdoc directive
 * @name movieAppApp.directive:revolutionSlider
 * @description
 * # revolutionSlider
 */
angular.module('movieAppApp')
  .directive('revolutionSlider', ['$timeout', function ($timeout) {
    return {
      templateUrl: 'partials/revolution-slider-directive.html',
      restrict: 'E',
      scope: {
        revolutionSliderInfo: '=info'
      },
      link: function(scope, elem) {
        //console.log(jQuery(elem));
        $timeout(function() {
          jQuery('.banner',elem).revolution({
   				delay: 8000,

   				startheight: 550,
   				hideThumbs: 10,

   				navigationType: 'none',		// navigation bullet display
   				onHoverStop: 'on',
   				hideThumbsOnMobile: 'off',	// thumb is not responsive on mobile view

   				touchenabled: 'on',			//touch enable on the slide
   				hideArrowsOnMobile: 'on',

   				stopAtSlide: -1,				// slide loop for infinite time
   				stopAfterLoops: -1,

   				hideCaptionAtLimit: 0,
   				fullWidth: 'off',
   				forceFullWidth: 'on',

   				shadow: 0					// bottom shadow of the slider you have possible value choise(0, 1, 2, ..)
   			  });
        }, 0, false);
      }
    };
}]);
