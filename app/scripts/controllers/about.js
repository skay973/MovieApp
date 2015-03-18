'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
