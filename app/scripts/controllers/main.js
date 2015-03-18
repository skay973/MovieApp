'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
