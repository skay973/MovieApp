'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('InfoCtrl', function ($scope, $routeParams, $location, $anchorScroll, serviceAjax) {
    $scope.query = {
      id: $routeParams.id,
      type: $routeParams.type
    };

    $scope.info = function () {
      $scope.loading = true;

      serviceAjax.info($scope.query.type, $scope.query.id).success(function(data) {
        console.log(data);
        $scope.data = data;
        $scope.loading = false;
      });
    };

    $scope.info();

  });
