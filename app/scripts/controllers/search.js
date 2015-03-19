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

    /* strange behavior, the custom directive loading was conflicting with
    the variables used by ui.bootstrap pagination's directive.
    Fixed by wrapping variables in a deeper level in the scope */
    $scope.pagination = {
      currentPage: 1,
      totalPages: 0
    };

    $scope.pageTitle = 'Search movies';
    $scope.pageSubtitle = 'Search results for "' + $scope.query + '"';

    $scope.orderByPredicate = 'title';
    $scope.orderByReverse = false;

    $scope.loadMovies = function(){
      $scope.loading = true;
      serviceAjax.search($scope.query, $scope.pagination.currentPage).success(function(data){
        $scope.movies = data.results;
        /*jshint camelcase: false */
        $scope.pagination.totalPages = data.total_pages;
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
