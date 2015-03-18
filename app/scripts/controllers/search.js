'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
    $scope.query = $routeParams.query;
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    $scope.loadMovies = function(){
      serviceAjax.search($scope.query, $scope.currentPage).success(function(data){
        $scope.movies = data.results;
        /*jshint camelcase: false */
        $scope.totalPages = data.total_pages;
      });
    };

    $scope.pageChanged = function(){
      $scope.loadMovies();
    };

    $scope.loadMovies();
 });
