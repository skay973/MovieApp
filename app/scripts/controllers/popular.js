'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('PopularCtrl', function ($scope, $log, serviceAjax) {

    /* strange behavior, the custom directive loading was conflicting with
    the variables used by ui.bootstrap pagination's directive.
    Fixed by wrapping variables in a deeper level in the scope */
    $scope.pagination = {
      currentPage: 1,
      totalPages: 0
    };

    $scope.pageTitle = 'Popular movies';
    $scope.pageSubtitle = 'Explore our movie database and find your next movie to watch !';

    $scope.orderByPredicate = 'title';
    $scope.orderByReverse = false;

    $scope.loadMovies = function(){
      $scope.loading = true;

      serviceAjax.popular($scope.pagination.currentPage).success(function(data){
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
