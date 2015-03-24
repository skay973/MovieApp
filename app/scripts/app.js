'use strict';

/**
 * @ngdoc overview
 * @name movieAppApp
 * @description
 * # movieAppApp
 *
 * Main module of the application.
 */
angular
  .module('movieAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:type/popular', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl'
      })
      .when('/:type/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl'
      })
      .when('/:type/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/tvs/popular'
      });
  });
