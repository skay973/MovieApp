'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
    var id = $routeParams.id;

    $scope.infoMovie = function () {
      $scope.loading = true;
      serviceAjax.info(id).success(function(data) {
        $scope.movie = data;
        $scope.loading = false;
      });
    };

    $scope.infoMovie();

  });
