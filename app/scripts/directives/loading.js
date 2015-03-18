'use strict';

/**
 * @ngdoc directive
 * @name movieAppApp.directive:loading
 * @description
 * # loading
 */
angular.module('movieAppApp')
  .directive('loading', function () {
    return {
      template: '<div><div ng-show=\'loading\' class=\'loading-container\'></div><div ng-hide=\'loading\' ng-transclude></div></div>',
      restrict: 'A',
      transclude: true,
      replace: true,
      scope: {
        loading: '=loading'
      },
      compile: function compile(element) {
        var spinner = new Spinner().spin();
        var loadingContainer = element.find('.loading-container')[0];
        loadingContainer.appendChild(spinner.el);
      }
    };
  });
