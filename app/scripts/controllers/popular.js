'use strict';

/**
 * @ngdoc function
 * @name movieAppApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the movieAppApp
 */
angular.module('movieAppApp')
  .controller('PopularCtrl', function ($scope, $log, $routeParams, serviceAjax) {
    $scope.query = {
      type: $routeParams.type
    };

    /* strange behavior, the custom directive loading was conflicting with
    the variables used by ui.bootstrap pagination's directive.
    Fixed by wrapping variables in a deeper level in the scope */
    $scope.pagination = {
      currentPage: 1,
      totalPages: 0
    };

    /* init page filer */
    $scope.orderByPredicate = 'title';
    $scope.orderByReverse = false;

    /* load slider from service, for now, it's a simple javascript array json */
    $scope.revolutionSlider = serviceAjax.slider();

    $scope.loadDatas = function(){
      $scope.loading = true;

      serviceAjax.popular($scope.query.type, $scope.pagination.currentPage).success(function(data){
        $scope.datas = data.results;
        /*jshint camelcase: false */
        $scope.pagination.totalPages = data.total_pages;
        /*jshint camelcase: true */
        $scope.loading = false;
      });
    };

    $scope.pageChanged = function(){
      $scope.loadDatas();
    };

    $scope.clickPredicateName = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'title';
    };

    $scope.clickPredicateRate = function(){
      $scope.orderByReverse = !$scope.orderByReverse;
      $scope.orderByPredicate = 'vote_average';
    };

    $scope.loadDatas();
  });
