'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.query = '';
    $scope.searchAction = function(){
      $location.path('/search/' + $scope.query);
    };
  });
