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
    $scope.orderByPredicate = 'title';
    $scope.orderByReverse = false;

    $scope.loadMovies = function(){
      $scope.loading = true;
      serviceAjax.search($scope.query, $scope.currentPage).success(function(data){
        $scope.movies = data.results;
        /*jshint camelcase: false */
        $scope.totalPages = data.total_pages;
        $scope.loading = false;
      });
    };

    $scope.pageChanged = function(){
      $scope.loadMovies();
    };

    $scope.clickPredicateName = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'title';
    };

    $scope.clickPredicateRate = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'vote_average';
    };

    $scope.loadMovies();
 });
